const cartItems = document.querySelector("#cart-items");
function renderCart() {

    if(cart.length === 0) {
        cartItems.innerHTML = "<h2>Your cart is empty.</h2>";

        document.getElementById("subtotal").innerText = "₹0";
        document.getElementById("summary-total").innerText = "₹0";
        return;
    }

    let html = "";
    let total = 0;

   for(let i = 0; i < cart.length; i++) {

    total += cart[i].price * cart[i].quantity;

    html += `
    <div class="cart-item">

        <img src="${cart[i].image}" alt="${cart[i].name}">

        <div class="cart-info">
            <h4>${cart[i].name}</h4>
            <p><strong>${cart[i].brand}</strong></p>
            <p>Price: ₹${cart[i].price}</p>
            <p>Quantity: ${cart[i].quantity}</p>
            <p><strong>Subtotal: ₹${cart[i].price * cart[i].quantity}</strong></p>

            <button onclick="removeFromCart(${cart[i].id})">
                Remove
            </button>
        </div>

    </div>`;
}

    cartItems.innerHTML = html;

    document.getElementById("subtotal").innerText = `₹${total}`;
    document.getElementById("summary-total").innerText = `₹${total}`;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

renderCart();