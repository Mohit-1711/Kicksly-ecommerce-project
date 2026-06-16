const products = [
  {
    id:1,
    name:"NOVABLAST 5",
    price:7999,
    brand:"ASICS",
    image: "store images/images/asics_novablast.webp",
    category: "Men Running Shoes",
    featured : true,
  },
  {
    id:2,
    name: "GEL-NIMBUS 28",
    price: 6299,
    brand: "ASICS",
    image: "store images/images/asics_mid.webp",
    category: "Men Running Shoes",
    featured : true
  },

  { id:3,
    name: "VOMERO 18",
    price: 5859,
    brand: "NIKE",
    image: "store images/images/nike vomero 18.jpg",
    category: "Men Running Shoes",
    featured : true
  },
 
  {
    id:4,
    name: "WINDFLO 11",
    price: 5799,
    brand: "NIKE",
    image: "store images/images/nike_winflo.jpg",
    category: "Men Running Shoes",
    featured : true
  },
  { id:5,
    name: "ULTRABOOST 5",
    price: 8999,
    brand: "ADIDAS",
    image: "store images/images/adidas ultraboost 5.jpg",
    category: "Men Running Shoes",
    featured : true
  },
   {
    id:6,
    name: "STRUCTURE PLUS",
    price: 5799,
    brand: "NIKE",
    image: "store images/images/nike_struct.jpg",
    category: "Men Running Shoes",
    featured : true
  },
  
  { id:7,
    name: "MAGIC SPEED 5",
    price: 6899,
    brand: "ASICS",
    image: "store images/images/magic.jpg",
    category: "Men Running Shoes",
    featured : true
  },
  {
  id: 8,
  name: "Pegasus 42",
  brand: "NIKE",
  category: "Men Running Shoes",
  image: "store images/images/pegasus.jpg",
  price: 6199,
  featured: false
},

{
  id: 9,
  name: "NITRO™ Elite 3",
  brand: "PUMA",
  category: "Men Running Shoes",
  image: "store images/images/nitro elite.jpg",
  price: 9999,
  featured : false
},

{
  id: 10,
  name: "Deviate Nitro 3",
  brand: "PUMA",
  category: "Men Running Shoes",
   image: "store images/images/nitro.jpg",
  price: 8499,
  featured : false
},
  { id:11,
    name: "GALAXY 7",
    price: 5499,
    brand: "ADIDAS",
    image: "store images/images/galaxy.jpg",
    category: "Men Running Shoes",
    featured : false
  },
  { id:12,
    name: "RUN FALCON 5",
    price: 2999,
    brand: "ADIDAS",
    image: "store images/images/runfalcon.jpg",
    category: "Men Running Shoes",
    featured : false
  },
  { id:13,
    name: "SKY-ROCKET LITE 2",
    price: 4799,
    brand: "PUMA",
    image: "store images/images/fade pro.jpg",
    category: "Men Running Shoes",
    featured : true
  },
]

//-----------------CART FUNCTIONALITY------------>

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(p => p.id === id);
  if(existing) {
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountEl = document.querySelector("#cart-count");
  
  if (cartCountEl) {
    cartCountEl.textContent = count;
  }
}

//-------------------------Render Products----------------------------->>

const race_day = document.querySelector("#products-container")


function renderProducts(productList) {
  if(!race_day) return;
    race_day.innerHTML = "";

    for(let i=0;i<productList.length;i++) {
        race_day.innerHTML += `
        <div class="col3"onclick="window.location.href='product.html?id=${productList[i].id}'">
            <img src="${productList[i].image}">
            <h4>${productList[i].name}</h4>
            <p>${productList[i].category}</p>
            <p>₹${productList[i].price}</p>
        </div>`;
    }
}
renderProducts(products);



//---------------------------------featured products----------------------------->
if(race_day){
const brandBox = document.querySelectorAll(".brand-card");

for(let i = 0; i < brandBox.length; i++){
  
  brandBox[i].addEventListener("click", function(){

    

    const selectedBrand= brandBox[i].dataset.brand;

    const filteredBrand =[];
    
    if(selectedBrand==="ALL"){
        renderProducts(featuredProducts);
        return;
      }
    for(let j=0;j<products.length;j++){
      if(products[j].brand===selectedBrand){
        filteredBrand.push(products[j]);
      }
      
    }
    renderProducts(filteredBrand);

  });
}

const featuredProducts = [];

for(let i = 0; i < products.length; i++){

    if(products[i].featured === true){
        featuredProducts.push(products[i]);
    }
  }
  renderProducts(featuredProducts);


  const searchInput = document.querySelector("#search-input");

  const searchResults = document.querySelector("#search-results");

  searchInput.addEventListener("input",function(){
    
    // console.log("typing...");
  
    const searchText = searchInput.value.toLowerCase();

    searchResults.innerHTML = "";

    const searchedProducts = [];

    let html="";

for(let i =0;i<products.length;i++){

  const fullName = products[i].brand + " " + products[i].name;

  if(fullName.toLowerCase().includes(searchText) && searchText!=""){
    
    html+=`

    <div class="search-item" data-id="${products[i].id}">
      <img src="${products[i].image}">
      <div class="mini-details">
        <p>${products[i].name} </p>
        <p>${products[i].brand}</p>
      </div>
      </div>
      `; 
  }
}

searchResults.innerHTML=html;
  })


  searchResults.addEventListener("click", function (e) {
 
    const item = e.target.closest(".search-item");
    if(!item){
      return;
    }
    const id = Number(item.dataset.id);

    const product = products.find(p => p.id === id);

    if(product){
      openProduct(product);
    }

  ;})

  const modal = document.querySelector("#product-modal");

function openProduct(product) {

  modal.innerHTML = `
    <div class="modal-content">
      <img src="${product.image}" style="width:100%">
      <h2>${product.name}</h2>
      <p>${product.brand}</p>
      <p>${product.category}</p>
      <h3>₹${product.price}</h3>
    </div>
  `;
   modal.style.display = "flex";
}

modal.addEventListener("click", function () {
  modal.style.display = "none";
});


}