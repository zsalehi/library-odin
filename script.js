let myLibrary = [
   new Book ("Harry Potter and the Philospher's Stone", "J.K. Rowling", 225, true),
   new Book ("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 325, false),
   new Book ("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 441, true),
];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
}

//find the table
const tableDiv = document.getElementById("library");
// create the table on the page
const table =  document.createElement('table');
// Append the table to the tableDiv
tableDiv.appendChild(table);

function addBookToLibrary () {
    const title = prompt("What is the name of the book?");
    const author =  prompt("What is the author of the book?");
    const pages =  prompt("How many pages are in the book?");
    const read = true;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    // insert new row
    var row = table.insertRow();

    // populate the cells with book information
    var titleCell = row.insertCell(0);
    titleCell.textContent = book.title;

    var authorCell = row.insertCell(1);
    authorCell.textContent = book.author;

    var pagesCell = row.insertCell(2);
    pagesCell.textContent = book.pages;

    var readStatusCell = row.insertCell(3);
    // create toggle button for read status
    var readStatusButton = document.createElement('button');
    readStatusButton.className = 'readStatusButton';
    readStatusButton.addEventListener('click', function(){
        toggleReadStatus(this.closest('tr'));
        this.textContent = book.read ? 'Read' : 'Unread'
    });
    readStatusButton.textContent = book.read ? 'Read' : 'Unread'
    readStatusCell.appendChild(readStatusButton);

    // Create delete button in last cell
    var deleteCell = row.insertCell(4);
        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function (){
            deleteRow(this.closest('tr'));
        });
        deleteCell.appendChild(deleteButton);
}

function displayBooks() {

    //create the header row, this will be dynamic based on the number of header items in the array
    const headerRow = table.insertRow(0);
    const headers = ['Title', 'Author', 'Pages', 'Read Status', ' ']
    // populate the header row
    for (var i = 0; i < headers.length; i++) {
        var headerCell = headerRow.insertCell(i);
        headerCell.textContent = headers[i];    
    }

    // Loop through myLibrary array and create new row for each book.
    for (var i = 0; i < myLibrary.length; i++) {
        var book = myLibrary[i];
        var row = table.insertRow(i + 1);

        // populate the cells with book information
        var titleCell = row.insertCell(0);
        titleCell.textContent = book.title;

        var authorCell = row.insertCell(1);
        authorCell.textContent = book.author;

        var pagesCell = row.insertCell(2);
        pagesCell.textContent = book.pages;

        var readStatusCell = row.insertCell(3);
        // create toggle button for read status
        var readStatusButton = document.createElement('button');
        readStatusButton.className = 'readStatusButton';
        readStatusButton.textContent = book.read ? 'Read' : 'Unread';
        readStatusButton.addEventListener('click', function(){
            toggleReadStatus(this.closest('tr'));
            this.textContent = book.read ? 'Read' : 'Unread';
        });
        readStatusCell.appendChild(readStatusButton);
     
        // Create delete button in last cell
        var deleteCell = row.insertCell(4);
        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(){
            deleteRow(this.closest('tr'));
        });
        deleteCell.appendChild(deleteButton);
    } 

}

// Function to delete row and associated data from the array

function deleteRow (row) {
    const rowIndex = row.rowIndex - 1;
    myLibrary.splice(rowIndex, 1);
    row.remove();
}

//Function to toggle read status from a specific row in the table.
function toggleReadStatus (row) {
    const rowIndex = row.rowIndex - 1;
    var book = myLibrary[rowIndex];
    book.toggleReadStatus();
}

const addBooksButton = document.querySelector('#add-book');
addBooksButton.addEventListener('click', addBookToLibrary);

document.addEventListener('DOMContentLoaded', displayBooks);
