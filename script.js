// menu-icon
const menuIcon = document.querySelector(".menuIcon");

const sidebar = document.getElementById("sidebar")

menuIcon.addEventListener("click", () => {
  
  sidebar.classList.add("active");

  menuIcon.style.display = "none";
})

//close menu 
document.querySelector(".closeMenu").addEventListener("click", () => {
  
  sidebar.classList.remove("active");

  menuIcon.style.display = "block";
})

// Getting cart DOM element
const cartIcon = document.querySelector(".cart");
const cartItem = document.querySelector(".cartItem");

// Adding events to cartIcon
cartIcon.addEventListener("click", () => {

  cartItem.classList.toggle("open");
})