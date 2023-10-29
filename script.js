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
    // loop through array
    // display each book
    myLibrary.forEach(item => {
        const display = document.querySelector(".book-display");
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = `${item.title} by ${item.author}, ${item.pages}, Read: ${item.status}`;
        display.appendChild(card);
    });
}

const book1 = new Book("Hello", "Hi", 23, true);
const book2 = new Book("Thunderclap", "PE Dekebna", 344, false);
myLibrary.push(book1);
myLibrary.push(book2);
displayEachBook();


