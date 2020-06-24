// - Global Variables
const display = document.querySelector('h1');
const modal = document.querySelector('#modal');

// - Event Listeners
document.querySelector('#btn-add-form').addEventListener('click', () => {
    console.log(mybook.info());
    modal.classList.remove('hide');
});

document.querySelector('#modal #btn-close').addEventListener('click', () => modal.classList.add('hide'));


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
