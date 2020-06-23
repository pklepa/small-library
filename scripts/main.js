// - Global Variables
const display = document.querySelector('h1');

// - Event Listeners
document.querySelector('button').addEventListener('click', () => {
    display.textContent = mybook.info();
});


// - Constructors
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
Book.prototype.info = function() { return `'${this.title}' by ${this.author} is ${this.pages} pages long.` };

// - Functions

// - Helper Functions

// - Script
let mybook = new Book('Where the Wild Things Are', 'Armless John', 201);
console.log(mybook)
