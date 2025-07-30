const products = [
  { name: "Smartphone", category: "electronics", price: 799, rating: 4.5 },
  { name: "Headphones", category: "electronics", price: 149, rating: 4.2 },
  { name: "Novel Book", category: "books", price: 19, rating: 4.8 },
  { name: "Sneakers", category: "fashion", price: 99, rating: 4.3 },
  { name: "T-Shirt", category: "fashion", price: 25, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.7 },
  { name: "Biography", category: "books", price: 15, rating: 4.6 }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function renderProducts(items) {
  productContainer.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="price">₹${item.price}</p>
      <p class="rating">⭐ ${item.rating}</p>
      <p class="category">📦 ${item.category}</p>
    `;
    productContainer.appendChild(card);
  });
}

function applyFiltersAndSort() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  switch (sortOption.value) {
    case "priceLowHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "ratingHighLow":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", applyFiltersAndSort);
sortOption.addEventListener("change", applyFiltersAndSort);

// Initial Load
renderProducts(products);
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");

// Filter by search input
const search = searchInput.value.toLowerCase();
if (search) {
  filtered = filtered.filter(product =>
    product.name.toLowerCase().includes(search)
  );
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
