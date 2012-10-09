# Google search interface
# brought to you by Acid.
# Jake Teton-Landis <just.1.jake@gmail.com>
# October 7, 2012


# Requires URI.js (http://medialize.github.com/URI.js/)
# Requires Handlebars.js
# Requires 


animate_typing = (input, end_string, speed, cbk) ->
    if end_string? && end_string.length
        setTimeout( (->
            $(input).val( $(input).val() + end_string[0])
            animate_typing(input, end_string[1..], speed, cbk)
        ), speed)
    else
        cbk()


on_resize = (cbk, t) ->
    window.onresize = ->
        clearTimeout(t)
        t = setTimeout(cbk, 400)
    cbk

class SearchRequest
    currentPage: -1
    queryString: null
    items: null

    constructor: (query) ->
        console.log('created new GoogleRequest')
        @items = []
        @queryString = query
        that = this
        # search a static proxy page because Google denies CORS and iframes
        $.get('/search/',
            {
                q: query,
            },
            (data, textStatus, xhr) =>
                # TODO: process data
                @processResults(data)
        )

    processResults: (data) ->
        page = $(data)
        results = page.find('li.g')
        results.each (i, el) =>
            $this = $(el)
            url = URI($this.find('h3.r > a').attr('href'))

            res = new SearchResult
                tld : url.tld()
                url : url.search(true).q
                title : $this.find('h3.r > a').text()
                description : $this.find('.s > .st').text()
                original_dom_element: this
            @items.push(res)
        @chuckPages()
        @advancePage()
        load_more = =>
            @advancePage()
        $('<div class="load-more">Load more items...</div>').appendTo($('body')).click(load_more).inview(load_more)

    # simulate pagination until real googling is a thing
    chuckPages: (per_page = 15) ->
        to_page = @items[..]
        pages = []
        while to_page.length
            pages.push(to_page[..per_page])
            to_page.splice(0, per_page)
        @pages = pages

    advancePage: ->
        @currentPage += 1
        page = @pages[@currentPage]
        # use a dummy element because isotope is really tempermental about wanting
        # jquery-constructed arrays
        dummy = $('<div></div>')
        dummy.append(i.rep for i in page)
        items = dummy.children()
        window.ISO.isotope('insert', items)


class SearchResult

    TEMPLATE : Handlebars.compile('''
    <a class="search-result" href="{{url}}">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <div class="tags">
            <div class="tag">
                <div class="name">TLD</div>
                <div class="value">{{tld}}</div>
            </div>
       </div>
    </a>
    ''')

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
        @tld = URI(opts.url).tld()
        # Invoke template to produce DOM item
        @rep = @TEMPLATE(this)
        
   
    
# Global state brought to you by
# ACID ENGINEERING
window.CURRENT_SEARCH = CURRENT_SEARCH = null




# time to play
$('document').ready ->
    $('.search-bar').submit (e) ->
        e.preventDefault()
        window.CURRENT_SEARCH = new SearchRequest( $('#search-field').val() )
        false

    # realllllly cool isotope thing
    window.ISO = $('#results').isotope
        itemSelector: '.search-result'

    # that we re-layout regularly...
    on_resize ->
        window.ISO.isotope('reLayout')

    # TODO: nodejs app that provides a live google proxy
    # for now search is hardcoded to 'beta reduction' on server-side
    # IE, that's the only search my proxy page serves
    $('#search-field').focus().val('')
    animate_typing($('#search-field'), 'beta reduction', 30, -> $('#go-button').click())

