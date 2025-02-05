// Update progress bar on the 'Currently Reading' section
function updateProgress(pagesRead, totalPages) {
    const progressFill = document.getElementById("progressFill");
    const progress = Math.min(Math.max((pagesRead / totalPages) * 100, 0), 100);
    progressFill.style.width = `${progress}%`;
    progressFill.innerText = `${Math.round(progress)}%`;
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
];

// Dynamically load books into the grid
const booksContainer = document.getElementById("books-container");
if (booksContainer) {
    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `<img src="${book.image}" alt="${book.title}"><p>${book.title}</p>`;
        bookDiv.onclick = () => openModal(book);
        booksContainer.appendChild(bookDiv);
    });
}

// Modal handling for books
function openModal(book) {
    const modal = document.getElementById("modal");
    document.getElementById("book-title").innerText = book.title;
    document.getElementById("book-review").innerText = book.review;
    document.getElementById("book-rating").innerText = book.rating;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}