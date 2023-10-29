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
    // push new object inside array
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
        status.textContent = `Read: ${item.status()}`;
        card.appendChild(status);

        const statusButton = document.createElement("button");
        statusButton.textContent = "Read";
        card.appendChild(statusButton);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Book";
        card.appendChild(removeButton);
    });
}

const book1 = new Book("Hello", "Hi", 23, true);
const book2 = new Book("Thunderclap", "PE Dekebna", 344, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book1);
myLibrary.push(book2);
displayEachBook();


