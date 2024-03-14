import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

let arrLocalStorageProduct = getCartProductFromLS()

export const addToCart = (event, id, stock, name) => {
    
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = Number(currentProdElem.querySelector(".productQuantity").innerText);
    let price = currentProdElem.querySelector(".productPrice").innerText;
    
    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
    if (existingProd) {
        if (0 < quantity <= stock){
            // quantity = existingProd.quantity + quantity
            price = Number((price.replace('₹','')*quantity).toFixed(2));
            let updatedCart = { id, quantity, price };
            updatedCart = arrLocalStorageProduct.map((curProd) => {
                return curProd.id === id ? updatedCart : curProd;
            });
            localStorage.setItem("cartProductLS", JSON.stringify(updatedCart))
            if (quantity === stock){
                showToast("max",name);
            }
            else{
                showToast("add",name);
            }
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