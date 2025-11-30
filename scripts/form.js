  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
// Product array
const products = [
    { id: 1, name: "Coffee" },
    { id: 2, name: "Tea" },
    { id: 3, name: "Juice" },
    { id: 4, name: "Soda" }
];

// Populate Product Name select
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Initialize review counter from localStorage
let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
document.getElementById("count").textContent = reviewCount;

// Handle form submission
document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const productId = document.getElementById("product").value;
    const productName = products.find(p => p.id == productId).name;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    // Create review card
    const reviewDiv = document.createElement("div");
    reviewDiv.innerHTML = `
        <p><strong>${name}</strong> (${email})</p>
        <p>Product: ${productName}</p>
        <p>Rating: ${rating}</p>
        <p>${review}</p>
        <hr>
    `;
    document.getElementById("submittedReviews").appendChild(reviewDiv);

    // Update review count
    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("count").textContent = reviewCount;

    // Reset form
    document.getElementById("reviewForm").reset();
});
