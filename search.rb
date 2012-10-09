#!/usr/bin/env ruby
# Simple search box app
require "sinatra"

# compile sources dynamically
require "haml"
require "coffee-script"
require "less"

# to proxy 
require "net/http"
require "cgi"

set :haml, :format => :html5


# static basics -- just compile and serve
get '/' do
    haml :index
end

get '/app.js' do
    coffee :app
end

get 'style.css' do
    less :style
end

# proxy Google to get around CORS stuff
# oops, this is against thier TOS...
# In the real world you'd use Yahoo BOSS
# But that costs money even for development.
def proxy_google(path)
    res = Net::HTTP.start(hist, 80) do |http|
        http.get path
    end
    res.body
end

get '/search/web' do
    s = CGI.escape(params[:q])
    proxy_google "/search?q=#{s}&num=100"
end

get '/search/images' do
    s = CGI.escape(params[:q])
    proxy_google "/search?q=#{s}&num=100&tbm=isch"
end
