// Update progress bar on the 'Currently Reading' section
function updateProgress(pagesRead, totalPages) {
    const progressFill = document.getElementById("progressFill");
    let progressPercentage = (pagesRead / totalPages) * 100; // Store result in a variable
    progressPercentage = Math.min(Math.max(progressPercentage, 0), 100);
    
    if (progressFill) { // Ensure the element exists before updating
        progressFill.style.width = `${progressPercentage}%`;
        progressFill.innerText = `${Math.round(progressPercentage)}%`;
    } else {
        console.log("Error: Progress bar element not found.");
    }
}

// Example: Update with hardcoded values for demo purposes
updateProgress(18, 200); // Replace 18 and 200 with actual current and total pages

// Books modal functionality for 'books.html'
const books = [
    {
        title: "This Song Is (Not) for You",
        image: "notforyou.jpg",
        review: "A solid and quick read! Definitely kept me entertained.",
        rating: "⭐⭐⭐☆☆",
    },
    {
        title: "The Clothing of Books",
        image: "clothingofbooks.jpg",
        review: "A MUST READ",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        title: "An Elderly Lady Is Up to No Good",
        image: "nogood.jpg",
        review: "I was rooting for her the WHOLE TIME! She can do no wrong",
        rating: "⭐⭐⭐⭐☆",
    },
    {
        title: "A Novel Love Story",
        image: "lovestory.jpg",
        review: "Romance meets fantasy done RIGHT.",
        rating: "⭐⭐⭐⭐☆",
    },
    {
        title: "Scythe",
        image: "scythe.jpeg",
        review: "A-M-A-Z-I-N-G!",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        title: "ADD MORE",
        image: "addbutton.svg", 
        restricted: true,

    },
];


// Simulating a login status
let isLoggedIn = false; // Change to true if logged in

// Dynamically load books into the grid
const booksContainer = document.getElementById("books-container");
if (booksContainer) {
    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `<img src="${book.image}" alt="${book.title}"><p>${book.title}</p>`;
        
        // Restrict access to certain books
        if (book.restricted && !isLoggedIn) {
            bookDiv.style.opacity = "0.5";
            bookDiv.style.pointerEvents = "none"; // Prevents clicking
            bookDiv.innerHTML += "<p><em>Login required</em></p>";
        } else {
            bookDiv.onclick = () => openModal(book);
        }
        booksContainer.appendChild(bookDiv);
    });
} else {
    console.log("Error: Books container not found.");
}
// Modal handling for books
function openModal(book) {
    const modal = document.getElementById("modal");
    if (modal && book) { // Check that modal and book exist
        document.getElementById("book-title").innerText = book.title;
        document.getElementById("book-review").innerText = book.review;
        document.getElementById("book-rating").innerText = book.rating;
        modal.style.display = "flex";
    } else {
        console.log("Error: Modal or book data is missing.");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    } else {
        console.log("Error: Modal element not found.");
    }
}
