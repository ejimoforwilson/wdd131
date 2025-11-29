document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    const reviewDiv = document.createElement("div");
    reviewDiv.innerHTML = `
        <p><strong>${name}</strong> (${email})</p>
        <p>Rating: ${rating}</p>
        <p>${review}</p>
        <hr>
    `;

    document.getElementById("submittedReviews").appendChild(reviewDiv);

    // Clear the form
    document.getElementById("reviewForm").reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;