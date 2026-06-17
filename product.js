const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const product = products.find(p => p.id === id);

const productInfo = document.querySelector(".product-detail");

productInfo.innerHTML = `
  <img src="${product.image}">
  <div class="listing">
  <p id="brand-text">${product.brand}</p>
  <h2>${product.name} ${product.category}</h2>
  <h3>₹${product.price}</h3>
  <div class= "prev">
  <h4 id = "mrp">MRP ₹${product.MRP} </h4>
  <h4>(${product.discount}%)</h4></div>
  <p id="tax">price inclusive of all taxes</p>
  <div class="coupon">
  <div class="box">
    <div class="left">
    <div>Use Code:</div>
    <strong class="code">KICKSLY25</strong>
    <p class="tc">T&C</p>
</div>
    <div class="divider"></div>
    <div class="right">25% off for new users; Extra 5% off on Kicksly. <br>
    <a href="index.html" style="text-decoration: underline">View All Products</a> </div>
</div>
  <div class="box">
    <div class="left"> 
      <div>Use Code:</div>
      <strong class="code">NORETURN</strong>
      <p class="tc">T&C</p></div>
      <div class="divider"></div>
      <div class="right">Extra 10% off. <br>The item becomes non-returnable.<br>
    <a href="index.html" style="text-decoration: underline">View All Products</a> </div>
  </div>

  <div class="box">
    <div class="left"> 
      <div>Use Code:</div>
      <strong class="code">${product.brand}2RUN</strong>
      <p class="tc">T&C</p></div>
      <div class="divider"></div>
      <div class="right">15% off on buying 2 pairs of ${product.brand} running article.<br>
    <a href="index.html" style="text-decoration: underline">View All Products</a> </div>
  </div>
  </div>
  <button onclick="addToCart(${product.id})">Add to Cart</button>
  </div>
  
  
`;