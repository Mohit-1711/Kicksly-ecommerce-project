const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");

function renderCart() {
    if(cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerHTML = "";
        return;
    }

    let html = "";
    let total = 0;

    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
        html += `
        <div class="cart-item">
            <img src="${cart[i].image}" width="100px">
            <div>
                <h4>${cart[i].name}</h4>
                <p>${cart[i].brand}</p>
                <p>₹${cart[i].price} x ${cart[i].quantity}</p>
                <button onclick="removeFromCart(${cart[i].id})">Remove</button>
            </div>
        </div>`;
    }

    cartItems.innerHTML = html;
    cartTotal.innerHTML = `<h3>Total: ₹${total}</h3>`;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

renderCart();