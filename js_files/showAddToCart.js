import products from "../api/products.json";
import { fetchQuantityfromCartLS } from "./fetchQuantityfromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) =>{
    // Here some() method works rather then include or map method()
    return cartProducts.some((curElem) => curElem.id === curProd.id);
})

const cardElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stock, price } = curProd;
        let productClone = document.importNode(templateContainer.content, true);

        const localStorageData = fetchQuantityfromCartLS(id, price);

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = localStorageData.price;
        productClone.querySelector(".productQuantity").textContent = localStorageData.quantity;

        productClone.querySelector(".stockElement").addEventListener('click', (event) => {
            incrementDecrement(event, id, stock, price);
        });

        productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => removeProductFromCart(id, name));

        cardElement.appendChild(productClone);
    })
}

showCartProduct();

updateCartProductTotal();