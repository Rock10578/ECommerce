export function showToast(operation, name){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (operation === "add"){
        toast.textContent = `${name} has been added to your cart`;
    }else {
        toast.textContent = `${name} has been deleted from your cart`;
    }
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.parentNode.removeChild(toast);
    }, 4000);
}