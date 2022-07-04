

var button = document.getElementById("menu-botton")
var div = document.getElementsByClassName("mobile-div")

button.addEventListener("click", function(){
    div[0].classList.toggle("active")
})