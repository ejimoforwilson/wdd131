document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// Get all bookmark buttons
const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

// Listen for clicks
bookmarkButtons.forEach(button => {
  button.addEventListener("click", () => {
    let dish = button.getAttribute("data-dish");

    // Get current bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    // Check if already bookmarked
    if (!bookmarks.includes(dish)) {
      bookmarks.push(dish); // add dish
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      alert(`${dish} bookmarked!`);
    } else {
      alert(`${dish} is already bookmarked.`);
    }
  });
});
const bookmarkList = document.getElementById("bookmark-list");
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

bookmarks.forEach(dish => {
  let li = document.createElement("li");
  li.textContent = dish;
  bookmarkList.appendChild(li);
});
 document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for contacting us, " + document.getElementById("name").value + "!");
      // Optional: reset form
      this.reset();
    });
    // Lagos food data (objects inside an array)
const foods = [
  {
    name: "Puff-Puff",
    img: "images/puff-puff.jpg",
    desc: "Soft and sweet fried dough, loved as a quick Lagos snack!"
  },
  {
    name: "Boli",
    img: "images/boli.jpg",
    desc: "Roasted ripe plantain often enjoyed with groundnut."
  },
  {
    name: "Suya",
    img: "images/suya.jpg",
    desc: "Spicy grilled beef seasoned with yaji spice!"
  }
];

// DOM elements
const featuredImg = document.getElementById("featuredImg");
const featuredName = document.getElementById("featuredName");
const featuredDesc = document.getElementById("featuredDesc");
const likeBtn = document.getElementById("likeBtn");
const likeCountDisplay = document.getElementById("likeCount");

// Load likes from localStorage if available
let likeCount = parseInt(localStorage.getItem("foodLikes")) || 0;
likeCountDisplay.textContent = likeCount;

// Pick a random food
function showRandomFood() {
  const randomIndex = Math.floor(Math.random() * foods.length);
  const randomFood = foods[randomIndex];

  featuredImg.src = randomFood.img;
  featuredImg.alt = randomFood.name;
  featuredName.textContent = randomFood.name;
  featuredDesc.textContent = randomFood.desc;
}

showRandomFood(); // Show a food on page load

// Like button function
likeBtn.addEventListener("click", () => {
  likeCount++;
  likeCountDisplay.textContent = likeCount;
  localStorage.setItem("foodLikes", likeCount);

  if (likeCount === 1) {
    alert("Thanks for your first like! ❤️");
  }
});
// ========================
// final.js
// ========================

// 1️⃣ Object example
const siteInfo = {
  author: "Ejimofor Wilson",
  year: new Date().getFullYear(),
  lastUpdated: document.lastModified
};

// 2️⃣ Array and array method example
const pages = ["Home", "About", "Contact", "References"];
pages.push("FAQ"); // Adding an extra page dynamically

// 3️⃣ Function to update footer year and last modified
function updateFooter() {
  const yearEl = document.getElementById("year");
  const lastModifiedEl = document.getElementById("lastModified");

  if (yearEl) yearEl.textContent = `${siteInfo.year}`; // Template literal
  if (lastModifiedEl) lastModifiedEl.textContent = `${siteInfo.lastUpdated}`; // Template literal
}

// 4️⃣ Function to greet user stored in localStorage
function greetUser() {
  const username = localStorage.getItem("username") || "Guest";

  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    greetingEl.textContent = `Hello, ${username}! Welcome back to the ${pages[0]} page.`; // Using array + template literal
  }
}

// 5️⃣ Conditional branching example
function checkYear() {
  if (siteInfo.year === 2025) {
    console.log("The current year is 2025.");
  } else {
    console.log("This website is being viewed in another year.");
  }
}

// 6️⃣ Function to store a sample user in localStorage
function saveUser(name) {
  localStorage.setItem("username", name);
}

// ========================
// Run functions on page load
// ========================
updateFooter();
greetUser();
checkYear();

// Optional: store a user for demo purposes
saveUser("Wilson");


