require 'sinatra'
require_relative 'tdd_pizza_app.rb'

enable :sessions

get '/' do
  erb :index, :layout => :layout 
end