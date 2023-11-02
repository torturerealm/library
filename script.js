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
        statusButton.classList.add("status-btn");
        statusButton.textContent = "Read";
        card.appendChild(statusButton);

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
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

function openDashboard() {
    document.querySelector(".dashboard").style.width = "250px";
    document.querySelector(".dashboard").style.padding = "16px";
}
    
function closeDashboard() {
    document.querySelector(".dashboard").style.width = "0px";
    document.querySelector(".dashboard").style.padding = "0px";
}

// Sample Books
const book1 = new Book("One Piece", "Eiichiro Oda", 21450, true);
const book2 = new Book("Harry Potter and the Sorcerer's Stone", "J.K Rowling", 320, true);
const book3 = new Book("The Lightning Thief", "Rick Riordan", 377, true);
const book4 = new Book("The Ghost Bird Series: Introductions", "C. L. Stone", 206, true);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
displayEachBook();


const submit = document.querySelector("form");
submit.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    resetDisplay();
    displayEachBook();
});

const dashboard = document.querySelector("#dashboard-button");
dashboard.addEventListener("click", () => {
    if (dashboard.className === "expand") {
        openDashboard();
        dashboard.classList.remove("expand");
        dashboard.classList.add("minimize");
    } else {
        closeDashboard();
        dashboard.classList.add("expand");
        dashboard.classList.remove("minimize");
    }
})

// let removeButton = document.querySelectorAll(".remove-btn");
// removeButton.forEach((button) => button.addEventListener("click", () => {
//     console.log(button);
//     let title = button.parentElement.querySelector(".title").textContent;
//     let index = myLibrary.findIndex((item => {
//          if (item.title === title) return true;
//     }));
//     myLibrary.splice(index, 1);
//     console.table(myLibrary);
//     resetDisplay();
//     displayEachBook();
// }));