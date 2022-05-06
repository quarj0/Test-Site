const cart = document.querySelector("nav .cart")
const cartSidebar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menuSidebar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")
const cartItemsTotal = document.querySelector("noi")
const cartPriceTotal = document.querySelector(".total-amount")
const cartUi = document.querySelector(".cart-sidebar .cart")
const totalDiv = document.querySelector(".total-sum")
const clearBtn = document.querySelector(".clear-cart-btn")
const cartContent = document.querySelector(".cart-content")

let Cart = [];
let buttonsDOM = [];

cart.addEventListener("click", function() {
    cartSidebar.style.transform = "translate(0)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay")
    setTimeout(function() {
        document.querySelector("body").append(bodyOverlay)
    }, 300)
})

closeCart.addEventListener("click", function() {
    cartSidebar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

burger.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(-100%)"
})

class Product {
    async getProduct() {
        const response = await fetch("products.json");
        const data = await response.json();
        let products = data.items;
        products = products.map(item => {
            const { title, price } = item.fields;
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            return { title, price, id, image }
        })
        return products;
    }
}

class UI {
    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            const ProductDiv = document.createElement("div")
            ProductDiv.innerHTML = `div class="product-card">
            <img src="${product.image}" alt="product">
            <span class= "add-to-cart" data-id="${product.id}">
            <i class = fa fa-cart--plus fa-1x"
            style = margin-right: 0.1em; font-size: 1em;></i> 
            Add to Cart
            </span>
            <div class = "product-name">${product.title}</div>
            <div class = "product-pricing">${product.price}</div>`

            const p = document.querySelector(".product")
            p.append(ProductDiv)
        })
    }
}