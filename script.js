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

myLibrary.forEach(displayBook(book))

function createNewRow () {
    //find the table
    const table = document.getElementById("library");
    const row = table.insertRow(); 

}

function displayBook(book) {
    
}