class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Jihn Doe",
        isbn: "34567889",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "457889",
      },
    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookTolist(book));
  }

  static addBookTolist(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = ` 
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm 
    delete">X</a></td>
    `;
    list.appendChild(row);
  }
}




document.addEventListener('DOMContentLoaded', UI.displayBooks);


document.querySelector('#book-form').addEventListener('subnit', (e) => {
const title = document.querySelector()
});