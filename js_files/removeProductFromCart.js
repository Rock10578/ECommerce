import { getCartProductFromLS } from "./getCartProductFromLS"
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id, name) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id );

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    // To remove the div on Click
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv){
        removeDiv.remove();
        showToast("delete",name);
    }
    updateCartValue(cartProducts);
    updateCartProductTotal();
}