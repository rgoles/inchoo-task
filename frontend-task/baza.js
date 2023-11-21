import './firebase.js'
import {getDatabase, ref, set} from "firebase/database";

const productId = document.querySelector("#enterId");
const productImage = document.querySelector("#enterImage");
const productTitle = document.querySelector("#enterTitle");
const productBrand = document.querySelector("#enterBrand");
const productColor = document.querySelector("#enterColor");
const productSize = document.querySelector("#enterSize");
const productPrice = document.querySelector("#enterPrice");

const addButton = document.querySelector("#add");
const updateButton = document.querySelector("#update");
const removeButton = document.querySelector("#remove");

const db = getDatabase();


function InsertData() {
    if (productId.value === "" || productImage.value === "" || productTitle.value === "" || productPrice.value === "") {

        alert("To add product to the cart you must enter: ID, Image location, Title and Price")

    } else {
        set(ref(db, "Products/" + productId.value), {
            title: productTitle.value, brand: productBrand.value, color: productColor.value, size: productSize.value, price: productPrice.value, image: productImage.value
        })
            .then(() => {
                alert("Data added successfully!");
            })
            .catch((error) => {
                alert(error);
            });
    }
}

// function FindData() {
//  }

function UpdateData() {
}

function RemoveData() {
}

addButton.addEventListener("click", InsertData);
updateButton.addEventListener("click", UpdateData);
removeButton.addEventListener("click", RemoveData);
