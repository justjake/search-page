# Google search interface
# Jake Teton-Landis <just.1.jake@gmail.com>
# October 7, 2012

USE_FAKE_DATA = true

SEARCH_IMAGE = (q) ->
    "/search/images/#{encodeURI(q)}"
SEARCH_WEB = (q) ->
    "/search/web/#{encodeURI(q)}"

if USE_FAKE_DATA
    SEARCH_IMAGE = (q) ->
        "/dummy/images.html"
    SEARCH_WEB = (q) ->
        "/dummy/web.html"

animate_typing = (input, end_string, speed, cbk) ->
    if end_string? && end_string.length
        setTimeout( (->
            $(input).val( $(input).val() + end_string[0])
            animate_typing(input, end_string[1..], speed, cbk)
        ), speed)
    else
        cbk()

# split an array into smaller chunks
chunk_array = (ar, per_page) ->
    to_page = ar[..]
    my_pages = []
    while to_page.length
        my_pages.push(to_page[..per_page])
        to_page.splice(0, per_page)
    my_pages

interleave_array = (ar1, ar2) ->
    # make copies of smaller for unshift
    if ar1.length > ar2.length
        larger = ar1
        smaller = ar2[..]
    else
        larger = ar2
        smaller = ar1[..]
    rate = Math.floor(larger.length / smaller.length)
    res = []
    k = 0
    for i in larger
        k += 1
        res.push(i)
        if smaller.length
            res.push(smaller.shift()) if (k % rate) == 0
    res



# window.onresize smoother
on_resize = (cbk, t) ->
    window.onresize = ->
        clearTimeout(t)
        t = setTimeout(cbk, 400)
    cbk


# A gargantuan controller class for performing searches
# TODO: rewrite everything with Emberjs if I'm actually going to use this
class SearchRequest
    currentPage: -1
    queryString: null

    constructor: (query) ->
        console.log('created new GoogleRequest')

        @images = []
        @pages = []

        @queryString = query
        that = this
        # search a static proxy page because Google denies CORS and iframes
        $.get(SEARCH_WEB(query),
            (data, textStatus, xhr) =>
                # TODO: process data
                @processPageResults(data)
        )
        $.get(SEARCH_IMAGE(query),
            (data, textStatus, xhr) =>
                # TODO: process data
                @processImageResults(data)
        )

    processPageResults: (data) ->
        page = $(data)
        results = page.find('li.g')
        console.log(results)
        results.each (i, el) =>
            $this = $(el)
            google_link = URI($this.find('h3.r > a').attr('href'))
            url = google_link.search(true).q

            tags = [
                {name: 'TLD', value: URI(url).tld()}
                {name: 'Type', value: 'Page'}
            ]

            res = new SearchResult
                url : url
                title : $this.find('h3.r > a').text()
                description : $this.find('.s > .st').text()
                original_dom_element: this
                tags: tags

            @pages.push(res)
        console.log('finished processing pages')
        if @images.length
            @startUI()

    processImageResults: (data) ->
        page = $(data)
        results = page.find('.images_table td')
        results.each (i, el) =>
            $this = $(el)
            google_link = URI($this.find('a').attr('href'))

            # parse last text line
            size_data = el.childNodes[ el.childNodes.length - 1 ].textContent
            dims = size_data.split(' - ')[0]
            format = size_data.split(decodeURI('%C2%A0'))
            format = format[format.length - 1]
            window.FMT = format

            nodes = Array.prototype.slice.call(el.childNodes)
            description = (n.textContent for n in nodes[5..-2]).join(' ')

            tags = [
                {name: 'Type', value: 'Image'}
                {name: 'Format', value: format}
                {name: 'TLD', value: URI(google_link.search(true).imgrefurl).tld()}
            ]

            res = new ImageResult
                url: google_link.toString()
                src: $this.find('img').attr('src')
                width: $this.find('img').attr('width')
                height: $this.find('img').attr('height')
                description: description
                tags: tags
            @images.push(res)

        console.log('finished processing images')
        # Ugly locks
        if @pages.length
            @startUI()


    startUI: ->
        console.log('started UI')
        window.filterController = new FilterController
        @chuckPages()
        @advancePage()
        window.filterController.rep.appendTo( $('#filters') )
        load_more = =>
            @advancePage()
        $('<div class="load-more">Load more items...</div>').appendTo($('body')).click(load_more).bind('inview', load_more)

    # simulate pagination to reduce DOM strain, and because Google is hating pretty hard
    chuckPages: (per_page = 15) ->
        results = interleave_array(@pages, @images)
        @results = chunk_array(results, per_page)

    advancePage: ->
        @currentPage += 1
        items = @results[ @currentPage ]
        # re-draw filter ui
        # boy I wish I was using Emberjs
        window.filterController.addItems(items)
        window.filterController.buildUI()
        # use a dummy element because isotope is really tempermental about wanting
        # jquery-constructed arrays
        dummy = $('<div></div>')
        dummy.append(i.rep for i in items)
        items = dummy.children()
        window.ISO.isotope('insert', items)

        # handle end of pages
        if @currentPage >= (@results.length - 1)
            # remove auto-scroller guy
            $('.load-more').remove()




tag_class_template = '{{#each tags}}tag-{{this.name}}-{{this.value}} {{/each}}'

tag_template = '''
<div class="tags">
    {{#each tags}}
    <div class="tag">
        <div class="name">{{this.name}}</div>
        <div class="value">{{this.value}}</div>
    </div>
    {{/each}}
</div>
'''

class SearchResult

    TEMPLATE : Handlebars.compile("""
    <a class="search-result #{tag_class_template}" href="{{url}}">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        #{tag_template}
    </a>
    """)

    tld: null
    url: null
    description: null
    title: null
    rep: null

    constructor: (opts) ->
        @data = opts
        @url = opts.url
        @description = opts.description
        @title = opts.title
        @tags = opts.tags
        # Invoke template to produce DOM item
        @rep = @TEMPLATE(this)
        $(@rep).data('result', this)


class ImageResult extends SearchResult
    TEMPLATE : Handlebars.compile("""
    <a class="search-result #{tag_class_template}" href="{{url}}">
        <img src="{{imgSrc}}" width="{{width}}" height="{{height}}" alt="{{title}}" />
        <p>{{description}}</p>
        <p class="size">{{size}}</p>
        #{tag_template}
    </a>
    """)

    constructor: (opts) ->
        super(opts)
        @imgSrc = opts.src
        @size = opts.size
        @width = opts.width
        @height = opts.height
        @rep = @TEMPLATE(this)
        $(@rep).data('result', this)

# use to keep track of possible values for each tag
class Set
    constructor: (items) ->
        @contents = []

    contains: (i) ->
        @contents.indexOf(i) > -1

    addItem: (i) ->
        @contents.push(i) unless @contains(i)

class FilterController
    constructor: ->
        @tags = {}

    addItems: (items) ->
        for i in items
            for t in i.tags
                if (not @tags[t.name]) || (not @tags[t.name].constructor == Set)
                    @tags[t.name] = new Set()
                @tags[t.name].addItem(t.value)

    buildUI: ->
        box = $('#filter-box')
        if box.length == 0
            box = $('<div id="filter-box" class="btn-toolbar"></div>')
        for tag_name, set of @tags
            grp = $(".filters-#{tag_name}")
            if grp.length == 0
                # create anew
                grp = $("""<div class="btn-group input-prepend filters-#{tag_name}" data-toggle="buttons-radio"></div>""")
                grp.append( $("""<span class="add-on">#{tag_name}</span>""") )
                grp.append( $("""<button type="button" class="btn" data-toggle="button">All</button>""").data('filter-value', '').button('toggle'))
                grp.appendTo(box)
            for opt in set.contents
                if $(".filter-value-#{opt}").length == 0
                    # create and append button
                    btn = $("""<button type="button" class="btn filter-value-#{opt}">#{opt}</button>""").data('filter-value', ".tag-#{tag_name}-#{opt}")
                    grp.append(btn)
            console.log('build button group', grp)
        @rep = box
            







    
window.CURRENT_SEARCH = CURRENT_SEARCH = null

# time to play
$('document').ready ->
    $('.search-bar').submit (e) ->
        e.preventDefault()
        window.CURRENT_SEARCH = new SearchRequest( $('#search-field').val() )
        window.ISO.isotope('destroy') if window.ISO?
        # realllllly cool isotope thing
        window.ISO = $('#results').isotope
            itemSelector: '.search-result'
        false


    # that we re-layout regularly...
    on_resize ->
        window.ISO.isotope('reLayout')

    # viviy filter controls from now until end of time
    latest_filter = ''
    $('#filters').on('click', 'button', (e) ->
        e.preventDefault()

        $(e.target).button('toggle')
        active_buttons = $('#filters').find('.btn.active')
        classes = active_buttons.map (idx, el) ->
            $(el).data('filter-value')

        window.latestFilter = classes.toArray()
        console.log('applying filter:', latestFilter)
        window.ISO.isotope({filter: latestFilter.join('')})

    )

    # TODO: nodejs app that provides a live google proxy
    # for now search is hardcoded to 'beta reduction' on server-side
    # IE, that's the only search my proxy page serves
    $('#search-field').focus().val('')
    animate_typing($('#search-field'), 'beta reduction', 30, -> $('#go-button').click()) if USE_FAKE_DATA

