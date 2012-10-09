# Search Tool

Jake Teton-Landis, <just.1.jake@gmail.com>

Intermittently availible on [my prototyping server](http://skunkworks.teton-landis.org)

## Features

- Search web pages and images at the same time!
- See your results in a grid.
- Filter based on TLD (useful if you want to focus just on .EDU sites)
- learn about beta reduction

## Requirements

-   Sinatra
-   Haml
-   Coffeescript
-   Less

## Google Issues

Google takes measures against web-scrapers and server-side proxies. As
such, by default this project uses dummy data containing a search for
"beta reduction".

To use real-live data, switch `USE_FAKE_DATA` at the top of
`views/app.coffee` from true to false.

## Future Improvements

### Better Proxy

Google can easily detect the sort of dumb proxy I'm using. It makes no efforts to appear as a script-free browser; sendingtoo browser-headers and disregarding cookies. A much more robust (and sneaky) Google request proxy would use [PhantomJS](http://phantomjs.org/) for requests to Google.com. PhantomJS could also provide results preview images for web results.

In the distant future the proxy could do response parsing itself and deliver only JSON to the front-end.  

### Better client-side code

I'll be the first to say that the coffeescript for this app is spaghetti-tastic.  I would like to re-factor it into an Ember.js application. 

-    Ember.Router for bookmark-able state control
-    SearchRequest as an ArrayController
-    Break SearchResult/ImageSearchResult into a SearchResult model and an ContentTile view
-    Total re-write of the filtering widget and FilterController to use data bindings and views
-    Use Ember view-class bindings to hide/show ContentTile views, bypassing Isotope's filer methods