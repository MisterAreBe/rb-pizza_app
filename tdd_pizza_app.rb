def get_size()
    {"8 inch" => 7.00, "16 inch" => 10.00, "32 inch" => 13.00}
end

def get_meat()
    ["Pepperoni", "Sausage", "Bacon", "Ham"]
end

def get_veggie()
    ["Onions", "Banana Peppers", "Olives", "Mushrooms"]
end

def get_sauce()
    ["Marinara", "Barbecue", "Garlic Butter"]
end

def get_crust()
    {"Pan" => 1.50, "Stuffed Crust" => 2.00, "Thin Crust" => 1.00, "Deep Dish" => 2.50}
end

def make_pizza(size, meat, veggie, sauce, crust)
    if get_size().has_key?(size)
        price = get_size()[size]

        meat.each do; price += 0.50; end

        veggie.each do; price += 0.25; end

        if sauce.is_a?(String)
            if sauce == "Sauceless"
                price -= 0.10
            else
                price += 0.10;
            end
        end
        
        price += get_crust()[crust]
            
    else; return 0; end
    price
end

def pizza_order(size, meat, veggie, sauce, crust) 
        if get_size().has_key?(size)
        size_order = size

        meat_order = ""
        meat.each do |i|
            x = get_meat().index(i)
            meat_order += ", #{get_meat()[x]}"
        end

        veggie_order = ""
        veggie.each do |i|
            x = get_veggie().index(i)
            veggie_order += ", #{get_veggie()[x]}"
        end

        unless sauce.is_a?(Array)
            sauce_order = ", #{sauce} Sauce"
        else
            sauce_order = ", Sauceless"
        end

        unless get_crust().has_key?(crust)
            crust_order = ", "
        else
            crust_order = ", #{crust}"
        end
        
        start_order = "Enjoy your "
    else
        size_order = "No"
    end
    
    order = "#{start_order}#{size_order}#{meat_order}#{veggie_order}#{sauce_order}#{crust_order} Cheese Pizza"
    order
end