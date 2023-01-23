/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

class Library {
  constructor() {
    this.data = [];
  }

  addBook(book) {
    this.data.push(book);
    localStorage.setItem('library', JSON.stringify(this.data));
    addToUI(book);
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('library', JSON.stringify(this.data));
  }
}

const library = new Library();

function getInput() {
  const title = document.getElementById('bookTitle');
  const author = document.getElementById('bookAuthor');
  const book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
}

function addToUI(bookObj) {
  let colorClass = '';
  if (library.data.indexOf(bookObj) % 2 !== 0) {
    colorClass = 'light';
  } else {
    colorClass = 'dark';
  }
  const bookList = document.getElementById('book-list');
  const book = document.createElement('li');
  book.classList.add('book');
  book.classList.add(colorClass);
  book.setAttribute('id', bookObj.id);
  book.innerHTML = `<p><span>"${bookObj.title}"</span> by ${bookObj.author}</p>`;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Remove';
  deleteBtn.addEventListener('click', () => library.removeBook(bookObj.id));
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
}

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const book = getInput();
  library.addBook(book);
});

// eslint-disable-next-line no-unused-vars
function displaySection(section) {
  const sectionList = document.getElementById('displaybook');
  const sectionForm = document.getElementById('form');
  const sectionContact = document.getElementById('contact');
  const stayword = document.querySelector('.stay');

  switch (section) {
    case 'displaybook':
      sectionList.style.display = 'block';
      sectionForm.style.display = 'none';
      sectionContact.style.display = 'none';
      stayword.style.display = 'none';
      break;

    case 'form':
      sectionList.style.display = 'none';
      sectionForm.style.display = 'block';
      sectionContact.style.display = 'none';
      stayword.style.display = 'none';
      break;

    case 'contact':
      sectionList.style.display = 'none';
      sectionForm.style.display = 'none';
      sectionContact.style.display = 'block';
      stayword.style.display = 'none';
      break;

    default:
      break;
  }
}

// Load page
window.onload = () => {
    library.data = JSON.parse(localStorage.getItem('library' || '[]'));
    if (library.data === null) {
      library.data = [];
      return;
    }
  
    library.data.forEach((book) => addToUI(book));
    setDate();
  };

function setDate() {
  const date = document.getElementById('date');
  // eslint-disable-next-line no-undef
  const { DateTime } = luxon;
  
  date.innerHTML = DateTime.now().toFormat('LLL dd yyyy, t');
}
