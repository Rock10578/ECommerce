import { addToCart } from "./addToCart";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    let quantity = 0;
    if (!products){ return false; }

    products.forEach((curProd) => {
        const {brand, category, description, id, image, name, price, stock } = curProd;

        const productClone = document.importNode(productTemplate.content, true);
        productClone.querySelector("#cardValue").setAttribute('id',`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price*4}`;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            quantity = homeQuantityToggle(event, id, stock);
        })
        productClone.querySelector('.add-to-cart-button').addEventListener('click',(event) => {
            addToCart(event, id, stock, name);
        })

        productContainer.append(productClone)
    });

    let localStorage = getCartProductFromLS();
    localStorage.forEach((curProd) => {
        const { id, quantity } = curProd
        const curCard = document.querySelector(`#card${id}`);
        const prodQuan = curCard.querySelector(".productQuantity");
        prodQuan.setAttribute('data-quantity', quantity);
        prodQuan.innerText = quantity;
    })
}