var triangle = document.querySelector(".triangle");
var square = document.querySelector(".square");
var share = document.getElementById("share");

share.addEventListener("click",function(){
    triangle.classList.toggle("aaa");
    square.classList.toggle("aaa");
})

var shareMobile = document.getElementById("share-mobile");
var socials = document.querySelector(".socials-mobile");
var mini = document.querySelector(".mini-container");
var random = document.querySelector(".random-chick");

shareMobile.addEventListener("click", function(){
  socials.style.display = "flex";
  mini.style.display = "none";
  random.style.display = "none";
})
