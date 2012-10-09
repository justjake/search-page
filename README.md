# Search Tool

Jake Teton-Landis, <just.1.jake@gmail.com>

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

