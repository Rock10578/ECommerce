function Bill() {
    if (localStorage.getItem("cartProductLS")){
        localStorage.removeItem("cartProductLS")
    }
    window.location.href = './bill.html';
}

document.getElementById('paymentButtonClicked').addEventListener('click', Bill);
