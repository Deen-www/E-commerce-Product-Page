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
const cartIcon = document.querySelectorAll(".cart");
const cartItem = document.querySelector(".cartItem");

// Adding events to cartIcon
cartIcon.forEach(cart => {
cart.addEventListener("click", (e) => {

  cartItem.classList.toggle("open");
})
})


// Let's get the thumbnails respond to click
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {

  thumbnail.addEventListener('click', (e) => {

    const parent = document.querySelector('.thumbnails');

    if(e.currentTarget === parent.children[0]) {

      mainImage.setAttribute('src', 'images/image-product-1.jpg');
    }
    else if(e.currentTarget === parent.children[1]) {

      mainImage.setAttribute('src', 'images/Image-product-2.jpg');
    }
    else if(e.currentTarget === parent.children[2]) {

      mainImage.setAttribute('src', 'images/Image-product-3.jpg');
    }
    else {

      mainImage.setAttribute('src', 'images/Image-product-4.jpg');
    }
  })
})

// Let's get the next and previous icons respond
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// Carousel images
const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
]

let currentIndex = 0;

next.addEventListener("click", () => {

  if(currentIndex < images.length-1) {

    currentIndex++;
    mainImage.setAttribute("src", images[currentIndex]);
  }
})

prev.addEventListener("click", () => {

  if(currentIndex > 0) {

    currentIndex--;
    mainImage.setAttribute("src", images[currentIndex]);
  }
})


// LIGHTBOX
const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".overlay");

mainImage.addEventListener("click", () => {

  lightbox.classList.add("show");
  overlay.classList.add("show")
})

// Let's make the close icon remove the lighbox
const removeLightbox = document.getElementById("close");

removeLightbox.addEventListener("click", () => {

  lightbox.classList.remove("show");
  overlay.classList.remove("show")
})

// Let's get the lightbox prev/next respond to click
const lightboxNext = document.getElementById("lightbox-next");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxImage = document.querySelector(".lightbox-image");


lightboxNext.addEventListener("click", () => {

  if(currentIndex < images.length-1) {

    currentIndex++;
    lightboxImage.setAttribute("src", images[currentIndex])
  }
})

lightboxPrev.addEventListener("click", () => {

  if(currentIndex > 0) {

    currentIndex--;
    lightboxImage.setAttribute("src", images[currentIndex])
  }
})

// Let's get lightbox thumbails respond to click
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
const parentThumbnails = document.querySelector(".lightbox-thumbnails");

lightboxThumbnails.forEach(lightboxThumbnail => {

  lightboxThumbnail.addEventListener("click", (e) => {

    if(e.currentTarget === parentThumbnails.children[0]) {

      currentIndex = 0;
      lightboxImage.setAttribute("src", images[currentIndex]);
    }
    else if(e.currentTarget === parentThumbnails.children[1]) {

      currentIndex = 1;
      lightboxImage.setAttribute("src", images[currentIndex]);
    }
    else if(e.currentTarget === parentThumbnails.children[2]) {

      currentIndex = 2;
      lightboxImage.setAttribute("src", images[currentIndex]);
    }
    else {

      currentIndex = 3;
      lightboxImage.setAttribute("src", images[currentIndex]);
    }
  })
})



// Let's make the plus and minus icons listen to events
const increament = document.querySelector('.plus');
const decreament = document.querySelector('.minus');
const quantity = document.querySelector('.qtn');

increament.addEventListener('click', () => {

  quantity.textContent = Number(quantity.textContent) + 1;
})

decreament.addEventListener('click', () => {

  if(Number(quantity.textContent) !== 0) {

    quantity.textContent = Number(quantity.textContent) - 1;
  } else {

    quantity.textContent = "0"
  }
})


// Let's make the cart display items after Add To Cart button is clicked

let cart = [];

const button = document.querySelector(".addToCartBtn");

button.addEventListener("click", () => {

  if(document.querySelector(".qtn").textContent === "0") {

    let alertMessage = document.getElementById("message");
    alertMessage.textContent = "Please select quantity";
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "20px";
  }

  else {

   document.getElementById("message").textContent = "";
   document.querySelector(".items").textContent = "";

   // product that'll display inside the cart
   let product = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: quantity.textContent,
    image: "images/image-product-1.jpg",
    deleteIcon: "icons/icon-delete.svg",
    button: "Checkout"
   };

   let total = product.price*product.quantity;

   // this will make the object product to be inside the empty array created "cart"
   cart.push(product);

   // let's create a container that'll contain our contents, this container will contains TWO divs
   let cartProduct = document.createElement("div");
   cartProduct.classList.add("cart-product");

   // Let's create our container content
   let image = document.createElement("img");
   image.id ="cart-product-image";
   let name = document.createElement("p");
   let price = document.createElement("p");
    // This elements will be inside price
    let unitPrice = document.createElement("span");
    let quantityText = document.createElement("span");
    let totalPrice = document.createElement("strong");

   let deleteIcon = document.createElement("img");
   deleteIcon.id ="delete";
   let btn = document.createElement("button");
   btn.classList.add("checkout-btn");

   image.src = product.image;
   name.textContent = product.name;
    // price
    unitPrice.textContent = "$" + product.price + ".00 x ";
    quantityText.textContent = product.quantity + " ";
    totalPrice.textContent = "$" + total + ".00";
    price.appendChild(unitPrice);
    price.appendChild(quantityText);
    price.appendChild(totalPrice);

   deleteIcon.src = product.deleteIcon;
   btn.textContent = product.button;


   // Lets create a container for our checkout button "SECOND DIV"
   let checkoutOutButton = document.createElement("div");
   checkoutOutButton.appendChild(btn);

  
   // Lets create a container for our name and price
   let namePrice = document.createElement("div");
   namePrice.appendChild(name);
   namePrice.appendChild(price);

   // Let's create a container for our image,name,price,and deleteicon "FIRST DIV"
   let firstDiv = document.createElement("div");
   firstDiv.classList.add("first-div");
   firstDiv.appendChild(image);
   firstDiv.appendChild(namePrice);
   firstDiv.appendChild(deleteIcon);


   // Let's put our content inside our container "cartProduct"
   cartProduct.appendChild(firstDiv);
   cartProduct.appendChild(checkoutOutButton)

   // cartItem is the element we want to put cartProduct inside
   cartItem.appendChild(cartProduct);



   // Let's make the cart-count appear on cart
   const cartCount = document.querySelectorAll(".cart-count");
    
    cartCount.forEach(count => {

      count.textContent = Number(count.textContent) + Number(quantity.textContent);
      count.classList.add("show");
    })
  

  

   // Let's get the delete icon listen to event

    deleteIcon.addEventListener("click", (e) => {

     let card = e.currentTarget.closest(".cart-product");

     cartCount.forEach(count => {

      count.textContent = Number(count.textContent) - Number(product.quantity);
     });

     card.remove();

     let remainingProduct = document.querySelectorAll(".cart-product");

     if(remainingProduct.length === 0) {
      document.querySelector(".items").textContent = "You cart is empty!";

      cartCount.forEach(count => {
        count.classList.remove("show");
      })

     }

    })


   // This makes our quantity textcontent to returned to 0 once the add to cart button is clicked
   quantity.textContent = "0";
  


  }

})