import './firebase.js'
import {getDatabase, ref, set} from "firebase/database";

const productId = document.querySelector("#enterId");
const enterImage = document.querySelector("#enterImage");
const enterTitle = document.querySelector("#enterTitle");
const enterBrand = document.querySelector("#enterBrand");
const enterColor = document.querySelector("#enterColor");
const enterSize = document.querySelector("#enterSize");
const enterPrice = document.querySelector("#enterPrice");

const addButton = document.querySelector("#add");
const updateButton = document.querySelector("#update");
const removeButton = document.querySelector("#remove");

const db = getDatabase();

function InsertData() {
    set(ref(db, "Products/" + productId.value), {
        title: enterTitle.value, brand: enterBrand.value, color: enterColor.value, size: enterSize.value, price: enterPrice.value, image: enterImage.value
    })
        .then(() => {
            alert("Data added successfully!");
        })
        .catch((error) => {
            alert(error);
        });
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
