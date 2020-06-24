// ..:: Global Variables
const display = document.querySelector('h1');
const modal = document.querySelector('#modal');
const cardsContainer = document.querySelector('.cards-container');

const inputTitle = document.querySelector('#book-title');
const inputAuthor = document.querySelector('#book-author');
const inputPages = document.querySelector('#book-pages');
const inputIsRead = document.querySelector('#book-read');

let idEnum = 0;
let bookLibrary = [];

// ..:: Event Listeners
// - Modal Handling
document.querySelector('#btn-add-form').addEventListener('click', () => modal.classList.remove('hide'));
document.querySelector('#modal #btn-close').addEventListener('click', () => modal.classList.add('hide'));
document.querySelector('#modal #btn-add').addEventListener('click', addBook);




// ..:: Constructors
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = 'ID' + (++idEnum);
}
Book.prototype.info = function() { return `'${this.title}' by ${this.author} is ${this.pages} pages long.` };




// ..:: Functions
function addBook(){
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let isRead = inputIsRead.checked;

    createBook(new Book(title, author, pages, isRead));
}

function createBook(bookObj) {
    console.log(bookObj)
    let bookHTML = `
        <div class="card" data-bookId="${bookObj.id}">
            <h2>${bookObj.title}</h2>
            <h3>${bookObj.author}</h3>
            <h4>${bookObj.pages} pages</h4>
            <div class="checkbox">
                <label for="read-checkbox">read</label>
                <input id="test" type="checkbox" name="read-checkbox" >
            </div>
            <a href="#" class="btn-remove">delete</a>
        </div>
    `;

    // Important not to use innerHTML as it destroys the element and every event handlers from its children
    cardsContainer.insertAdjacentHTML('beforeend', bookHTML);
    
    document.querySelector(`.card[data-bookId=${bookObj.id}] a`).addEventListener('click', removeBook);
    document.querySelector(`.card[data-bookId=${bookObj.id}] input[type="checkbox"]`).checked = bookObj.isRead;
    document.querySelector(`.card[data-bookId=${bookObj.id}] input[type="checkbox"]`).addEventListener('click', changeReadStatus);

    bookLibrary.push(bookObj);
}


function removeBook(e) {
    let bookCard = e.target.parentNode;
    
    let bookIndexInLibrary = bookLibrary.findIndex((book) => book.id == bookCard.dataset.bookid);
    bookLibrary.splice(bookIndexInLibrary, 1);
    
    cardsContainer.removeChild(bookCard);
}

function changeReadStatus(e) {
    let bookCard = e.target.parentNode.parentNode;
    
    let bookIndexInLibrary = bookLibrary.findIndex((book) => book.id == bookCard.dataset.bookid);
    bookLibrary[bookIndexInLibrary].isRead = e.target.checked;
}

// - Helper Functions


// ..:: Script
createBook(new Book('Budapeste', 'Chico Buarque de Holanda', 174, true));
createBook(new Book('Will my cat eat my eyeballs?', 'Caitlin Doughty', 222, true));
createBook(new Book('The Time Machine', 'H.G. Wells', 118, true));