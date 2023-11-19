// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

const db = getDatabase


const enterId = document.querySelector('#enterId')
const enterTitle = document.querySelector('#enterTitle')
const enterBrand = document.querySelector('#enterBrand')
const enterColor = document.querySelector('#enterColor')
const enterSize = document.querySelector('#enterSize')
const enterPrice = document.querySelector('#enterPrice')


const addButton = document.querySelector('#add')
const updateButton = document.querySelector('#update')
const removeButton = document.querySelector('#remove')


function InsertData() {
    set(ref(db, "Products/" + enterId.value), {
        Title: enterTitle.value,
        Brand: enterBrand.value,
        Color: enterColor.value,
        Size: enterSize.value,
        Price: enterPrice.value
    })
        .then(() => {
            alert('Data added successfully!')
        })
        .catch((error) => {
            alert(error)
        })
}

// function FindData() {
//  }

function UpdateData() {
}

function RemoveData() {
}

addButton.addEventListener('click', InsertData)
updateButton.addEventListener('click', UpdateData)
removeButton.addEventListener('click', RemoveData)