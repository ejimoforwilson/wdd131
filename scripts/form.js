// ----- Product Array -----
const products = [
  { id: "product1", name: "Product 1" },
  { id: "product2", name: "Product 2" },
  { id: "product3", name: "Product 3" },
  { id: "product4", name: "Product 4" }
];

const productSelect = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// ----- Review Counter -----
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
const countSpan = document.getElementById("count");
countSpan.textContent = reviewCount;

// ----- Form Submission -----
const form = document.getElementById("reviewForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Increment review count
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
  countSpan.textContent = reviewCount;

  // Clear form after submission
  form.reset();
});

// ----- Footer dynamic year & last modified -----
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
