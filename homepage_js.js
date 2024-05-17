//pwede ka nmn gumawa ng sarili mong js
//example lang to


//link to Food list.html  
//need pa gumawa for two sa  about us and location
var menuList = document.querySelector(".Menu_list");
menuList.addEventListener("click", function() {
  window.location.href = "Food list.html"; 
});

var Location = document.querySelector(".Location");
Location.addEventListener("click", function() {
  window.location.href = "Location.html"; 
});

//for calling the phone 
//number need gumawa sa fb and email
var phone = document.querySelector(".phone");
phone.addEventListener("click", function() {

  window.location.href = "tel:+639682487864"; 
});

var fb = document.querySelector(".fb");
fb.addEventListener("click", function() {

  window.location.href = "https://www.facebook.com/p/AO-Japanese-Cuisine-Restaurant-Catering-100086916185458/"; 
});

var gmail = document.querySelector(".gmail");
gmail.addEventListener("click", function() {

  window.location.href = "mailto:aojapanesecuisine.ph@gmail.com"; 
});

//button for square icon  
//no need na baguhin to
const container_for_square_icon = document.querySelector(".container-for-square-icon");
const nav_header = document.querySelector(".nav_header");
const square_icon = document.querySelector(".square-icon");
const rec_1 = document.querySelector(".rec-1");
const rec_3 = document.querySelector(".rec-3");
const rec_2 = document.querySelector(".rec-2");

container_for_square_icon.addEventListener("click", ()=> {
  container_for_square_icon.classList.toggle("click");
  nav_header.classList.toggle("click");
  square_icon.classList.toggle("click");
  rec_1.classList.toggle("click");
  rec_3.classList.toggle("click");
  rec_2.classList.toggle("click");
});





