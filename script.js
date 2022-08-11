let myLibrary = [];

function Book (title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary () {
    const title = prompt("What is the name of the book?");
    const author =  prompt("What is the author of the book?");
    const book = new Book(title, author);
    myLibrary.push(book);
}


//find the table
const table = document.getElementById("library");
let row;
let cell1;
let cell2;
let cell3;

function createNewRow () {
    //insert a row
    row = table.insertRow(-1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2); 
}

function displayBook(book) {
    cell1.innerHTML = myLibrary.indexOf(this)+1;
    cell2.innerHTML = book.title;
    cell3.innerHTML = book.author;
}

myLibrary.forEach(displayBook(book));