import { getCartProductFromLS } from "./getCartProductFromLS";

export const addToCart = (event , id, stock) => {
    
    let arrLocalStorageProduct = getCartProductFromLS();
    
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = Number(currentProdElem.querySelector(".productQuantity").innerText);
    let price = currentProdElem.querySelector(".productPrice").innerText;
    price = Number(price.replace('₹','')*quantity);

    arrLocalStorageProduct.push({id, quantity, price})
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))
}