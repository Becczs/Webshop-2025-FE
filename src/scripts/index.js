import { fetchProducts, searchProducts } from "../utils/api.js";

let allProducts = [];              // Alla hämtade produkter
let allCategories = [];            // Unika kategorier
let currentProductsDisplayed = []; // Produkter som för närvarande visas

document.addEventListener("DOMContentLoaded", async () => {
  // Ladda produkter och kategorier
  await loadProducts();
  loadCategoriesFromProducts();

  // Update the cart display when the page loads
  updateCartDisplay();

  // Eventlyssnare för dropdownen
  document.getElementById("sort-select").addEventListener("change", () => {
    displayProducts(currentProductsDisplayed);
  });

  
// Hämta och visa produkter
async function loadProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "<p>Laddar produkter...</p>";

  try {
    const products = await fetchProducts();
    allProducts = products;
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p>Failed to load products.</p>";
  }
}

// Härled och visa kategorier i sidomenyn
function loadCategoriesFromProducts() {
  const sidebarNav = document.querySelector("aside nav");
  sidebarNav.innerHTML = "<p>Laddar kategorier...</p>";

  try {
    // Hämta unika kategorier
    const categorySet = new Set();
    allProducts.forEach(product => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });
    const categories = Array.from(categorySet);
    allCategories = categories;
    sidebarNav.innerHTML = "";

    // "Alla produkter"-knapp
    const allButton = document.createElement("button");
    allButton.className = "category-button";
    allButton.textContent = "Alla produkter";
    allButton.addEventListener("click", () => {
      displayProducts(allProducts);
    });
    sidebarNav.appendChild(allButton);

    if (categories.length === 0) {
      sidebarNav.innerHTML += "<p>Inga kategorier tillgängliga.</p>";
      return;
    }

    // Skapa en knapp per kategori
    categories.forEach(categoryName => {
      const button = document.createElement("button");
      button.className = "category-button";
      button.textContent = categoryName;
      button.addEventListener("click", () => {
        filterProductsByCategory(categoryName);
      });
      sidebarNav.appendChild(button);
    });
  } catch (error) {
    console.error("Fel vid härledning av kategorier:", error);
    sidebarNav.innerHTML = "<p>Misslyckades med att ladda kategorier.</p>";
  }
}

// Filtrera produkter baserat på vald kategori
function filterProductsByCategory(categoryName) {
  const filtered = allProducts.filter(product => product.category === categoryName);
  displayProducts(filtered);
}

// Sorteringsfunktion med stöd för stigande och fallande ordning
function sortProducts(products) {
  const sortSelect = document.getElementById("sort-select");
  const sortOption = sortSelect ? sortSelect.value : "";
  let sortedProducts = [...products];

  switch (sortOption) {
    case "price-asc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      // Om inget alternativ är valt behåll ursprunglig ordning
      break;
  }
  return sortedProducts;
}

// Visa produkter med sortering
function displayProducts(products) {
  currentProductsDisplayed = products; // Spara aktuellt filtrerade produkter
  const sortedProducts = sortProducts(products);
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  if (sortedProducts.length === 0) {
    productsContainer.innerHTML = "<p>Inga produkter tillgängliga.</p>";
    return;
  }

  sortedProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

// Skapa ett produktkort
function createProductCard(product) {
  const element = document.createElement("div");
  element.className = "product-card";
  element.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="product-image" style="height: 160px;width: 160px;">
    <div class="card-info">
    
      <h3 style="color:red;font-size: 30px;">${product.price.toFixed(2)} kr</h3>
      <p>${product.name}</p>
      <p style="font-size: 14px;">${product.brand}</p>
      <button class="add-to-cart-btn">Köp</button>
    </div>
  `;

  element.querySelector(".add-to-cart-btn").addEventListener("click", () => {
    // Get current cart from localStorage or create a new one if it doesn't exist
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart by its unique _id
    const productInCart = cart.find(item => item.id === product._id);

    if (productInCart) {
      // If the product is already in the cart, increase the quantity
      productInCart.quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      cart.push({
        id: product._id, // Use the _id from the API as the unique identifier
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }

    // Save the updated cart back to localStorage (store the array of multiple products)
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart display in the header
    updateCartDisplay();
  });

  return element;
}

const searchInput = document.getElementById("search-input");
if (searchInput) {

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();
  
    if (!query) {
      displayProducts(allProducts); 
      return;
    }
  
    const results = allProducts.filter(product =>
      product.name && product.name.toLowerCase().includes(query) ||
      product.brand && product.brand.toLowerCase().includes(query) ||
      product.category && product.category.toLowerCase().includes(query)
     
    );
  
    displayProducts(results);
  };
  

  searchInput.addEventListener("input", handleSearch);
}
});
// Update Cart Display
function updateCartDisplay() {
  // Get cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Calculate the number of items and total price
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  // Update the cart counter in the header
  document.getElementById("cart-item-count").textContent = itemCount;
  document.getElementById("cart-total-price").textContent = totalPrice;
}
