function openModal() {
    document.getElementById("modal").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        document.getElementById("modal").style.display = "none";
    }
}
window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
function moreMeats() {
    var x = document.getElementById("meatPicker");
    var y = document.getElementById("getMeats");
    var z = document.getElementById("meats");
    if(x.value != "none") {
        y.type = "button";
    } else {
        while(z.hasChildNodes()) {
            z.removeChild(z.lastChild);
        }
        y.type = "hidden";
        document.getElementById("takeMeats").type = "hidden";
    }
}
function removeMeats() {
    var meatBox = document.getElementById("meats");
    meatBox.removeChild(meatBox.lastChild);
    if(!meatBox.hasChildNodes()){
        document.getElementById("takeMeats").type = "hidden";
    }
}
function addMeats() {
    var meatBox = document.getElementById("meats");
    var x = document.createElement("select");
    var pep = document.createElement("option");
    var saus = document.createElement("option");
    var bac = document.createElement("option");
    var ham = document.createElement("option");
    var z = document.createElement("option");
    x.name = "meat[]";
    z.text = "Additional Meat Topping(s):";
    z.value ="none";
    pep.text = "Pepperoni";
    pep.value = "Pepperoni";
    saus.text = "Sausage";
    saus.value = "Sausage";
    bac.text = "Bacon";
    bac.value = "Bacon";
    ham.text = "Ham";
    ham.value = "Ham";
    var meats = [z, pep, saus, bac, ham];

    for(i = 0; i < meats.length; i ++) {
        var v = meats[i];
        x.add(v);
    }
    meatBox.appendChild(x);
    document.getElementById("takeMeats").type = "button";
}
function moreVeggies() {
    var x = document.getElementById("veggiePicker");
    var y = document.getElementById("getVeggies");
    var take = document.getElementById("takeVeggies");
    var z = document.getElementById("veggies");
    if(x.value != "none") {
        y.type = "button";
        if(z.hasChildNodes()) {
            take.type = "button";
        } else {
            take.type = "hidden";
        }
    } else {
        while(z.hasChildNodes()) {
            z.removeChild(z.lastChild);
        }
        y.type = "hidden";
        document.getElementById("takeveggies").type = "hidden";
    }
}
function removeVeggies() {
    var veggieBox = document.getElementById("veggies");
    veggieBox.removeChild(veggieBox.lastChild);
    if(!veggieBox.hasChildNodes()){
        document.getElementById("takeVeggies").type = "hidden";
    }
}
function addVeggies() {
    var veggieBox = document.getElementById("veggies");
    var x = document.createElement("select");
    var a = document.createElement("option");
    var b = document.createElement("option");
    var c = document.createElement("option");
    var d = document.createElement("option");
    var z = document.createElement("option");
    x.name = "veggie[]";
    z.text = "Additional Veggie Topping(s):";
    z.value = "none";
    a.text = "Onions";
    a.value = "Onions";
    b.text = "Banana Peppers";
    b.value = "Banana Peppers";
    c.text = "Olives";
    c.value = "Olives";
    d.text = "Mushrooms";
    d.value = "Mushrooms";
    var veggies = [z, a, b, c, d];

    for(i = 0; i < veggies.length; i ++) {
        var v = veggies[i];
        x.add(v);
    }
    veggieBox.appendChild(x);
    document.getElementById("takeVeggies").type = "button";
}