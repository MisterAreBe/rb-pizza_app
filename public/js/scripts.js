var where = document.getElementById("whereTo");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function home(){
    where.value = "home";
}
function menu(){
    where.value = "menu";
}
function order(){
    where.value = "order";
}
function contect(){
    where.value = "contact";
}
function about(){
    where.value = "about";
}