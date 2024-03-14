import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS()

export const addToCart = (event, id, stock, name) => {
    
    let arrLocalStorageProduct = getCartProductFromLS();
    console.log("arrLocalStorageProduct ::",arrLocalStorageProduct);
    
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = Number(currentProdElem.querySelector(".productQuantity").innerText);
    let price = currentProdElem.querySelector(".productPrice").innerText;
    
    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
    if (existingProd) {
        console.log("Stocks Available : ",stock,existingProd.quantity);
        let remaining = stock - existingProd.quantity;
        console.log("remaining : ",remaining);
        if (quantity > 0 && remaining > 0){
            quantity = existingProd.quantity + quantity
            price = Number(price.replace('₹','')*quantity);
            let updatedCart = { id, quantity, price };
            updatedCart = arrLocalStorageProduct.map((curProd) => {
                return curProd.id === id ? updatedCart : curProd;
            });
            localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))
            showToast("add",name);
        } else{
            showToast("notAvailable",name);
        }
        return false;
    }
    
    price = Number(price.replace('₹','')*quantity);

    arrLocalStorageProduct.push({id, quantity, price})
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))

    // update the cart with number of different product clicked
    updateCartValue(arrLocalStorageProduct);

    showToast("add",id);
}