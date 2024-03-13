import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";

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

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = price;

        cardElement.appendChild(productClone);
    })
}

showCartProduct();