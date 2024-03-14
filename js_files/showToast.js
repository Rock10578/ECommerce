export function showToast(operation, name){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (operation === "add"){
        toast.textContent = `${name} has been added to your cart`;
    } else if (operation === "notAvailable") {
        toast.textContent = `${name} has been deleted from your cart`;
    } else if (operation === "max"){
        toast.textContent = `More ${name} will be added soon..`;
    }
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.parentNode.removeChild(toast);
    }, 4000);
}