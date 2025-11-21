document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// Welcome message
const welcome = document.getElementById("welcome");
if (welcome) {
  welcome.innerHTML =
  `Welcome! Today is ${new Date().toLocaleDateString()}.`;
}

// Bookmark feature
const bookmarks = JSON.parse(localStorage.getItem("myBookmarks") || "[]");
const listEl = document.getElementById("bookmarkList");
const addBtn = document.getElementById("addBookmarkBtn");

function save() {
  localStorage.setItem("myBookmarks", JSON.stringify(bookmarks));
}

function showBookmarks() {
  if (!listEl) return;
  listEl.innerHTML = bookmarks.length === 0
    ? "<li>No bookmarks yet</li>"
    : bookmarks.map((b, i) =>
      `<li>${b.title} -
       <a href="${b.url}" target="_blank">Visit</a>
       <button onclick="removeBookmark(${i})">Remove</button>
      </li>`).join("");
}

function addBookmark() {
  const title = prompt("Title:");
  const url = prompt("URL starting with http:");

  if (!title || !url.startsWith("http")) {
    alert("Invalid input");
    return;
  }

  bookmarks.push({ title, url });
  save();
  showBookmarks();
}

function removeBookmark(index) {
  bookmarks.splice(index, 1);
  save();
  showBookmarks();
}

if (addBtn) addBtn.addEventListener("click", addBookmark);
showBookmarks();

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      alert("Fill correctly!");
      e.preventDefault();
    } else {
      alert("Message sent!");
    }
  });
}
