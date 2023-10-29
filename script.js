const myLibrary = [];

function Book(title, author, page, status) {
    this.title = title,
    this.author = author,
    this.page = page,
    this.status = function() {
        if (status) return "read"
        else return "not yet read";
    }
}

function addBookToLibrary() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const page = document.getElementById("book-pages").value;
    const status = document.getElementById("reading-status").checked;
    
    const newBook = new Book(title, author, page, status);
    myLibrary.push(newBook);
}

function displayEachBook() {
    myLibrary.forEach(item => {
        const display = document.querySelector(".book-display");
        
        const card = document.createElement("div");
        card.classList.add("card");
        display.appendChild(card);
        
        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = `${item.title}`;
        card.appendChild(title);

        const author = document.createElement("div");
        author.textContent = `Author: ${item.author}`;
        card.appendChild(author);
        
        const page = document.createElement("div");
        page.textContent = `Pages: ${item.page}`;
        card.appendChild(page);

        const status = document.createElement("div");
        status.textContent = `Status: ${item.status()}`;
        card.appendChild(status);

        const statusButton = document.createElement("button");
        statusButton.textContent = "Read";
        card.appendChild(statusButton);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Book";
        card.appendChild(removeButton);
    });
}

function resetDisplay() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
}

const book1 = new Book("Hello", "Hi", 23, true);
const book2 = new Book("Thunderclap", "PE Dekebna", 344, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book1);
myLibrary.push(book2);
displayEachBook();

const submit = document.querySelector("form");
submit.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    resetDisplay();
    displayEachBook();
});


