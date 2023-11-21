"use strict";
import './firebase.js'
import {getDatabase, onValue, ref,} from "firebase/database";


// This happens when you click on a cart button to open it
window.addEventListener('load', function () {
    const cartButton = document.querySelector('#cart-button')
    const cartModal = document.querySelector('.cart-modal')

    // Set initial style for cartModal
    cartModal.style.display = 'none'

    function toggleCartModal() {
        if (cartModal.style.display === 'none') {
            cartModal.style.display = 'flex'
            cartButton.style.border = "black 1px solid"
        } else {
            cartModal.style.display = 'none'
            cartButton.style.border = "none"
        }

    }

    cartButton.addEventListener('click', toggleCartModal)
})


const db = getDatabase();

const productDataRef = ref(db, 'Products/');

// cartModalUl - a place where product is rendered and shown
let cartModalUl = document.querySelector('#cart-modal-ul')
// variable for numbers of products in cart
let productInCartCounter = 0


onValue(productDataRef, (snapshot) => {
    const productData = snapshot.val();

    function renderProduct(product, currentIndex, totalProducts) {

        ++productInCartCounter
        const productNumber = document.querySelector('#product-number')
        productNumber.textContent = `My Cart (${productInCartCounter} items)`

        const li = document.createElement("li")
        li.id = 'list'
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        li.appendChild(productDiv)

        const hr = document.createElement('hr')
        hr.classList.add('solid')

        const image = product.image || '';
        if (product.image) {
            const image = document.createElement('img')
            image.src = product.image
            productDiv.appendChild(image)
        } else {
            console.log('nema slike')
        }

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        productDiv.appendChild(productInfo)


        const title = product.title || '';
        if (title) {
            let clonedSpan = document.createElement('span')
            clonedSpan.classList.add(`product-title`)
            clonedSpan.textContent = product.title
            productInfo.appendChild(clonedSpan)
        }
        const brand = product.brand || '';
        if (brand) {
            let clonedSpan = document.createElement('span')
            clonedSpan.classList.add(`product-brand`)
            clonedSpan.textContent = `Brand: ${product.brand}`
            productInfo.appendChild(clonedSpan)
        }
        const color = product.color || '';
        if (color) {
            let clonedSpan = document.createElement('span')
            clonedSpan.classList.add(`product-color`)
            clonedSpan.textContent = `Color: ${product.color}`
            productInfo.appendChild(clonedSpan)
        }
        const size = product.size || '';
        if (size) {
            let clonedSpan = document.createElement('span')
            clonedSpan.classList.add(`product-size`)
            clonedSpan.textContent = `Size: ${product.size}`
            productInfo.appendChild(clonedSpan)
        }
        const price = product.price || '';
        const rndNum = Math.floor(Math.random() * 6) + 1
        if (price) {
            let clonedSpan = document.createElement('span')
            clonedSpan.classList.add(`product-price`)
            clonedSpan.textContent = `${rndNum} x $${product.price}`
            productInfo.appendChild(clonedSpan)
        }



        cartModalUl.appendChild(li)
        if (currentIndex !== totalProducts - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('solid');
            cartModalUl.appendChild(hr);
        }

    }

    let totalProducts = Object.keys(productData).length
    for (const [index, productId] of Object.keys(productData).entries()) {
        const product = productData[productId];
        renderProduct(product, index, totalProducts);
    }
});


// Scroll buttons
let scrollUp = document.querySelector('#scroll-button-up')
let scrollDown = document.querySelector('#scroll-button-down')

// scrolling down btn listener
scrollDown.addEventListener('click', function () {
    const li = document.getElementById('list')
    const hr = document.querySelector('.solid')

    let scrollHeight = li.offsetHeight + 4 + hr.offsetHeight + 10
    console.log(`${scrollHeight} pixel`)
    cartModalUl.scrollBy(0, scrollHeight)
})

// scolling up btn listener
scrollUp.addEventListener('click', function () {
    const li = document.getElementById('list')
    const hr = document.querySelector('.solid')

    let scrollHeight = li.offsetHeight + 4 + hr.offsetHeight + 10

    console.log(`${scrollHeight} pixel`)
    cartModalUl.scrollBy(0, -scrollHeight)
})
