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
function calcM() {
    var a = document.getElementById('name');
    var b = document.getElementById('street');
    var c = document.getElementById('phone');
    var x = document.getElementById('mile');
    var y = 5;
    var z,w;
    var tempArr = [a, b, c, x];
    if (x.value > 0 && a.value.length > 0 && b.value.length > 0 && c.value.length == 10) {
        w = y + (x.value * 0.30);
        z = Math.round(w * 100) / 100;
        z = z.toFixed(2);
        z = z.toString();
        document.getElementById('deliPrice').value = z;
        document.getElementById('carryName').value = a.value;
        document.getElementById('confirm').submit();
    } else if (c.value.length != 10) {
        alert("Please Enter A Valid 9 Digit Phone Number");
    } else {
        tempArr.forEach(function(v) {
            if (!v.value.length > 0) {
                v.style.backgroundColor = "red";
            }
        });
    }
}
function custN() {
    var x = document.getElementById("carryName");
    if (x.value.length > 0) {
        document.getElementById('confirm').submit();
    } else {
        x.style.backgroundColor = "red";
    }
}
function confirmPizzaCheck() {
    var a = document.getElementById('checkMe0').innerText;
    var b = document.getElementById('checkMe1').innerText;
    var c = document.getElementById('checkMe2').innerText;
    var d = document.getElementById('checkMe3').innerText;
    var e = document.getElementById('checkVe0').innerText;
    var f = document.getElementById('checkVe1').innerText;
    var g = document.getElementById('checkVe2').innerText;
    var h = document.getElementById('checkVe3').innerText;
    var j = document.getElementById('gasMoney').value;
    var k = document.getElementById('sauceShow').innerText;
    var l = document.getElementById('crustShow').innerText;
    var m = document.getElementById('sauceShow');
    var n = document.getElementById('crustShow');
    var o = document.getElementById('meatHolder');
    var p = document.getElementById('veggHolder');
    var q = 0;
    var r = 0;
    var i;
    var tempArr = [a, b, c, d]
    var veggArr = [e, f, g, h]

    if (k == "Marinara") {
        m.className = "mar";
    } else if (k == "Barbecue") {
        m.className = "bar";
    } else if (k == "Garlic Butter") {
        m.className = "gbs";
    } else if (k == "Sauceless") {
        m.className = "sauceless";
    }
    if (l == "Pan") {
        n.style.textAlign = "center";
        n.className = "pan";
    } else if (l == "Stuffed Crust") {
        n.className = "sc";
    } else if (l == "Thin Crust") {
        n.className = "tc";
    } else if (l == "Deep Dish") {
        n.className = "dd";
    }
    if (!j.includes('.')) {
        document.getElementById('deliPrice').style.display = "none";
    }
    tempArr.forEach(function(value, index) {
        if (!value.length > 0) {
            document.getElementById(`meat${index}Label`).style.display = "none";
            q += 1
        }
    });
    if (q == 4) {
        o.style.display = "none";
    }
    veggArr.forEach(function(value, index) {
        if (!value.length > 0) {
            document.getElementById(`vegg${index}Label`).style.display = "none";
            r += 1
        }
    });
    if (r == 4) {
        p.style.display = "none";
    }
}
function showDeliHideCarry() {
    document.getElementById('deliverBox').style.display = 'block';
    document.getElementById('carryOutBox').style.display = 'none';
}
function showCarryHideDeli() {
    document.getElementById('carryOutBox').style.display = 'block';
    document.getElementById('deliverBox').style.display = 'none';
}
function congratsPizza() {
    var a = document.getElementById('carryOnMy');
    var b = document.getElementById('waywardSon');
    var c = document.getElementById('checkThisOut').value;

    if (c.length > 0) {
        a.style.display = 'none';
    } else {
        b.style.display = 'none';
    }
}
// function moreMeats() {
//     var x = document.getElementById("meatPicker");
//     var y = document.getElementById("getMeats");
//     var z = document.getElementById("meats");
//     if(x.value != "none") {
//         y.type = "button";
//     } else {
//         while(z.hasChildNodes()) {
//             z.removeChild(z.lastChild);
//         }
//         y.type = "hidden";
//         document.getElementById("takeMeats").type = "hidden";
//     }
// }
// function removeMeats() {
//     var meatBox = document.getElementById("meats");
//     meatBox.removeChild(meatBox.lastChild);
//     if(!meatBox.hasChildNodes()){
//         document.getElementById("takeMeats").type = "hidden";
//     }
// }
// function addMeats() {
//     var meatBox = document.getElementById("meats");
//     var x = document.createElement("select");
//     var pep = document.createElement("option");
//     var saus = document.createElement("option");
//     var bac = document.createElement("option");
//     var ham = document.createElement("option");
//     var z = document.createElement("option");
//     x.name = "meat[]";
//     z.text = "Additional Meat Topping(s):";
//     z.value ="none";
//     pep.text = "Pepperoni";
//     pep.value = "Pepperoni";
//     saus.text = "Sausage";
//     saus.value = "Sausage";
//     bac.text = "Bacon";
//     bac.value = "Bacon";
//     ham.text = "Ham";
//     ham.value = "Ham";
//     var meats = [z, pep, saus, bac, ham];

//     for(i = 0; i < meats.length; i ++) {
//         var v = meats[i];
//         x.add(v);
//     }
//     meatBox.appendChild(x);
//     document.getElementById("takeMeats").type = "button";
// }
// function moreVeggies() {
//     var x = document.getElementById("veggiePicker");
//     var y = document.getElementById("getVeggies");
//     var take = document.getElementById("takeVeggies");
//     var z = document.getElementById("veggies");
//     if(x.value != "none") {
//         y.type = "button";
//         if(z.hasChildNodes()) {
//             take.type = "button";
//         } else {
//             take.type = "hidden";
//         }
//     } else {
//         while(z.hasChildNodes()) {
//             z.removeChild(z.lastChild);
//         }
//         y.type = "hidden";
//         document.getElementById("takeveggies").type = "hidden";
//     }
// }
// function removeVeggies() {
//     var veggieBox = document.getElementById("veggies");
//     veggieBox.removeChild(veggieBox.lastChild);
//     if(!veggieBox.hasChildNodes()){
//         document.getElementById("takeVeggies").type = "hidden";
//     }
// }
// function addVeggies() {
//     var veggieBox = document.getElementById("veggies");
//     var x = document.createElement("select");
//     var a = document.createElement("option");
//     var b = document.createElement("option");
//     var c = document.createElement("option");
//     var d = document.createElement("option");
//     var z = document.createElement("option");
//     x.name = "veggie[]";
//     z.text = "Additional Veggie Topping(s):";
//     z.value = "none";
//     a.text = "Onions";
//     a.value = "Onions";
//     b.text = "Banana Peppers";
//     b.value = "Banana Peppers";
//     c.text = "Olives";
//     c.value = "Olives";
//     d.text = "Mushrooms";
//     d.value = "Mushrooms";
//     var veggies = [z, a, b, c, d];

//     for(i = 0; i < veggies.length; i ++) {
//         var v = veggies[i];
//         x.add(v);
//     }
//     veggieBox.appendChild(x);
//     document.getElementById("takeVeggies").type = "button";
// }