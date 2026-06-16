const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const product = products.find(p => p.id === id);

const productInfo = document.querySelector(".product-detail");

productInfo.innerHTML = `
  <img src="${product.image}">
  <div class="listing">
  <p>${product.brand}</p>
  <h2>${product.name} Running Sports Shoes</h2>
  <h3>₹${product.price}</h3>
  <button onclick="addToCart(${product.id})">Add to Cart</button>
  </div>
  
  
`;