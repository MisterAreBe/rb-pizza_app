require 'sinatra'
require_relative 'tdd_pizza_app.rb'

enable :sessions

get '/' do
  erb :index, :layout => :layout 
end

post '/whereTo' do
where = params[:go]

  case where
  when "home"
   erb :index, :layout => :layout
  when "menu"
   erb :menu, :layout => :layout
  when "order"
   erb :order, :layout => :layout
  when "contact"
   erb :contact, :layout => :layout
  when "about"
   erb :about, :layout => :layout
  end

end