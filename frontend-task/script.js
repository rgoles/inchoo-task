"use strict";
let productData = {
    "product1": {
        "id": 1, "image": "/img/proizvod1.svg", "title": "Set of GT-S Series Cross Drilled", "brand": "Brembo", "color": "Red", "price": 1770.00
    }, "product2": {
        "id": 2, "image": "/img/proizvod2.svg", "title": "Just Disk GT-S Cross Drilled", "brand": "Brabour International", "size": "405mm", "price": 950.00
    }, "product3": {
        "id": 3, "image": "/img/proizvod3.svg", "title": "GT Slotted 2 Piece Brake Rotors", "brand": "Brembo", "color": "Yellow", "price": 1670.00
    }, "product4": {
        "id": 4, "image": "/img/proizvod4.svg", "title": "Synthetic Break Fluid", "brand": "Valvoline", "size": "354ml", "price": 10.00
    }, "product5": {
        "id": 5, "image": "/img/proizvod5.svg", "title": "Alcon 380x34mm Front Rotors Pair Nissan GT-R R35 2009-2021", "brand": "Alcon", "size": "380x34mm", "price": 1099.98
    },
}
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


// cartModalUl - a place where product is rendered and shown
let cartModalUl = document.querySelector('#cart-modal-ul')
// variable for numbers of products in cart
let productInCartCounter = 0

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


    if (product.image) {
        const image = document.createElement('img')
        image.src = product.image
        productDiv.appendChild(image)
    }

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    productDiv.appendChild(productInfo)

    for (const key in product) {
        if (key === 'id' || key === 'image') {
            continue
        }


        if (key === 'image') {
            const image = document.createElement('img')
            image.src = product.image
            productDiv.appendChild(image)
        }

        let clonedSpan = document.createElement('span')
        clonedSpan.classList.add(`product-${key}`)
        clonedSpan.textContent = product[key]
        productInfo.appendChild(clonedSpan)

        if (key === 'brand') {
            clonedSpan.textContent = `Brand: ${product[key]}`
        }
        if (key === 'size') {
            clonedSpan.textContent = `Size: ${product[key]}`
        }
        if (key === 'color') {
            clonedSpan.textContent = `Color: ${product[key]}`
        }
        if (key === 'price') {
            clonedSpan.textContent = `1 x $${product[key]}`
        }

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

// Scroll buttons
let scrollUp = document.querySelector('#scroll-button-up')
let scrollDown = document.querySelector('#scroll-button-down')

// scrolling down btn listener
scrollDown.addEventListener('click', function () {
    const li = document.getElementById('list')
    const hr = document.querySelector('.solid')

    let scrollHeight = li.offsetHeight + 6 + hr.offsetHeight + 10
    console.log(`${scrollHeight} pixel`)
    cartModalUl.scrollBy(0, scrollHeight)
})

// scolling up btn listener
scrollUp.addEventListener('click', function () {
    const li = document.getElementById('list')
    const hr = document.querySelector('.solid')

    let scrollHeight = li.offsetHeight + 6 + hr.offsetHeight + 10

    console.log(`${scrollHeight} pixel`)
    cartModalUl.scrollBy(0, -scrollHeight)
})


