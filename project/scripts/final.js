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


