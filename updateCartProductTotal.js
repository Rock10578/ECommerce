import { getCartProductFromLS } from "./getCartProductFromLS"

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = curElem.price || 0;
        return accum + productPrice;
    }, initialValue)
    totalProductPrice = Number(totalProductPrice.toFixed(2));
    
    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice+50}`;
}