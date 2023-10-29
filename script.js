const myLibrary = [];

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = function() {
        status ? "read": "not yet read";
    }
}

function addBookToLibrary() {
    // do stuff
}

function displayEachBook() {
    // loop through array
    // display each book
}

