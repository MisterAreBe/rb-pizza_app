require 'sinatra'
require_relative 'tdd_pizza_app.rb'

enable :sessions

get '/' do
  erb :index, :layout => :layout 
end

post '/makePizza' do
  size = params[:size]
  meats = params[:meat] || []
  veggies = params[:veggie] || []
  sauce = params[:sauce]
  crust = params[:crust]
  if meats == ["none"]
    meats = []
  end
  if veggies == ["none"]
    veggies = []
  end
  if sauce == "none"
    sauce = []
  end
  price = make_pizza(size, meats, veggies, sauce, crust)
  pizza = pizza_order(size, meats, veggies, sauce, crust)
  
  p "#{params}"
  p "#{price}"
  p "#{pizza}"

  session[:price] = price
  session[:pizza] = pizza
  redirect '/order'
end

get '/order' do
  price = session[:price] || ''
  pizza = session[:pizza] || ''
  startOrder = "Your order : <br>"
  price = price.to_s
  
  if price.index('.') == 1
    if price.length == 3
      price += '0'
    end
  elsif price.length == 4
    price += '0'
  end

  if pizza == '' && price == ''
    order = ''
    price = ''
  else
    order = "#{startOrder}#{pizza}<br>Price : "
    price = "#{price}"
  
  end
  erb :order, :layout => :layout, locals: {price: price, order: order}
end


get '/menu' do
  erb :menu, :layout => :layout
end

get '/about' do
  erb :about, :layout => :layout
end
