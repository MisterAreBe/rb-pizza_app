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
  p "#{params}"
  
  if meats.include?("Pepperoni")
    meat0 = "Pepperoni"
  else
    meat0 = ""
  end
  if meats.include?("Sausage")
    meat1 = "Sausage"
  else
    meat1 = ""
  end
  if meats.include?("Bacon")
    meat2 = "Bacon"
  else
    meat2 = ""
  end
  if meats.include?("Ham")
    meat3 = "Ham"
  else
    meat3 = ""
  end
  if veggies.include?("Onions")
    vegg0 = "Onions"
  else
    vegg0 = ""
  end
  if veggies.include?("Banana Peppers")
    vegg1 = "Banana Peppers"
  else
    vegg1 = ""
  end
  if veggies.include?("Olives")
    vegg2 = "Olives"
  else
    vegg2 = ""
  end
  if veggies.include?("Mushrooms")
    vegg3 = "Mushrooms"
  else
    vegg3 = ""
  end

  price = make_pizza(size, meats, veggies, sauce, crust)
  session[:price] = price
  session[:size] = size
  session[:meat0] = meat0
  session[:meat1] = meat1
  session[:meat2] = meat2
  session[:meat3] = meat3
  session[:vegg0] = vegg0
  session[:vegg1] = vegg1
  session[:vegg2] = vegg2
  session[:vegg3] = vegg3
  session[:sauce] = sauce
  session[:crust] = crust
  redirect '/order'
end

get '/order' do
  price = session[:price]
  size = session[:size]
  meat0 = session[:meat0]
  meat1 = session[:meat1]
  meat2 = session[:meat2]
  meat3 = session[:meat3]
  vegg0 = session[:vegg0]
  vegg1 = session[:vegg1]
  vegg2 = session[:vegg2]
  vegg3 = session[:vegg3]
  sauce = session[:sauce]
  crust = session[:crust]

  price = price.to_s
  
  if price.index('.') == 1
    if price.length == 3
      price += '0'
    end
  elsif price.length == 4
    price += '0'
  end
  
  price = "#{price}"
  
  erb :order, :layout => :layout, locals: {price: price, size: size, meat0: meat0, meat1: meat1, meat2: meat2, meat3: meat3, vegg0: vegg0, vegg1: vegg1, vegg2: vegg2, vegg3: vegg3, sauce: sauce, crust: crust}
end


get '/menu' do
  erb :menu, :layout => :layout
end

get '/about' do
  erb :about, :layout => :layout
end

post '/confirm' do
  size = params[:size]
  meat0 = params[:meat0] || ""
  meat1 = params[:meat1] || ""
  meat2 = params[:meat2] || ""
  meat3 = params[:meat3] || ""
  vegg0 = params[:vegg0] || ""
  vegg1 = params[:vegg1] || ""
  vegg2 = params[:vegg2] || ""
  vegg3 = params[:vegg3] || ""
  sauce = params[:sauce]
  crust = params[:crust]
  price = params[:price]
  deliPrice = params[:deliPrice] || ""
  name = params[:name]
  phone = params[:phone] || ""
  p "#{params}"

  if deliPrice.length > 0
    total = (price.to_f + deliPrice.to_f) * 1.06
  else
    total = price.to_f * 1.06
  end
  total = '%.2f' % total

  session[:total] = total.to_s
  session[:name] = name
  session[:phone] = phone
  session[:deliPrice] = deliPrice
  session[:price] = price
  session[:size] = size
  session[:sauce] = sauce
  session[:crust] = crust
  session[:meat0] = meat0
  session[:meat1] = meat1
  session[:meat2] = meat2
  session[:meat3] = meat3
  session[:vegg0] = vegg0
  session[:vegg1] = vegg1
  session[:vegg2] = vegg2
  session[:vegg3] = vegg3
  redirect '/confirmOrder'
end

get '/confirmOrder' do
  price = session[:price]
  deliPrice = session[:deliPrice]
  size = session[:size]
  sauce = session[:sauce]
  crust = session[:crust]
  meat0 = session[:meat0]
  meat1 = session[:meat1]
  meat2 = session[:meat2]
  meat3 = session[:meat3]
  vegg0 = session[:vegg0]
  vegg1 = session[:vegg1]
  vegg2 = session[:vegg2]
  vegg3 = session[:vegg3]
  name = session[:name]
  phone = session[:phone]
  total = session[:total]
  if phone.length > 0
    temparr = phone.split("")
    temparr.insert(0, "(")
    temparr.insert(4, ")")
    temparr.insert(5, "-")
    temparr.insert(9, "-")
    phone = temparr.join("")
  end
  erb :confirm, :layout => :layout, locals: {price: price, deliPrice: deliPrice, total: total, size: size, sauce: sauce, crust: crust, meat0: meat0, meat1: meat1, meat2: meat2, meat3: meat3, vegg0: vegg0, vegg1: vegg1, vegg2: vegg2, vegg3: vegg3, name: name, phone: phone}
end

post '/finalPizza' do
  size = params[:size]
  meat = params[:meat_list] || ""
  veggie = params[:veggie_list] || ""
  sauce = params[:sauce]
  crust = params[:crust]
  price = params[:total]
  name = params[:name]
  phone = params[:phone] || ""
  meat0Checker = params[:meat0Checker]
  meat1Checker = params[:meat1Checker]
  meat2Checker = params[:meat2Checker]
  meat3Checker = params[:meat3Checker]
  vegg0Checker = params[:vegg0Checker]
  vegg1Checker = params[:vegg1Checker]
  vegg2Checker = params[:vegg2Checker]
  vegg3Checker = params[:vegg3Checker]
  sauceChecker = params[:sauceChecker]
  crustChecker = params[:crustChecker]
  sizeChecker = params[:sizeChecker]
  correct = params[:wantPizza]
  p "#{params}"
  
  meatCheck = [meat0Checker, meat1Checker, meat2Checker, meat3Checker]
  veggCheck = [vegg0Checker, vegg1Checker, vegg2Checker, vegg3Checker]

  if sauceChecker == "no" || crustChecker == "no" || sizeChecker == "no" || correct == "no"
    redirect '/'
  end
  if meat.length > 0
    meats = meat.split(" ")
  else
    meats = []
  end
  if veggie.length > 0
    if veggie.include?("Banana Peppers")
      x = veggie.index("B")
      veggie.slice!(x, 14)
      veggies = veggie.split(" ")
      veggies << "Banana Peppers"
    else
    veggies = veggie.split(" ")
    end
  else
    veggies = []
  end
  if sauce == "Sauceless"
    sauce = []
  end

  meatCheck.each_with_index do |v,i|
    if v == "no"
      meats.delete_at(i)
    end
  end
  veggCheck.each_with_index do |v,i|
    if v == "no"
      veggies.delete_at(i)
    end
  end

  pizza = pizza_order(size, meats, veggies, sauce, crust)
  session[:order] = pizza
  session[:price] = price
  session[:name] = name
  session[:phone] = phone  
  redirect '/yourPizza'
end

get '/yourPizza' do
  pizza = session[:order]
  price = session[:price]
  name = session[:name]
  phone = session[:phone] || ""

  erb :yourPizza, :layout => :layout, locals: {pizza: pizza, price: price, name: name, phone: phone}
end