// Book Constructor
function Book(title, author, isbn) {
this.title = title;
this.author = author;
this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To list
UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert Cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href"#" class"delete">X</a></td>
  `;

  list.appendChild(row);
}
// clear Fields
UI.prototype.clearFields = function() {
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#isbn').value  = ''
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get Form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  console.log(form);

  // TimeOut after 3 sec
  setTimeout(function() {
  document.querySelector('.alert').remove();
  }, 3000);

}




// Event Listeners
document.querySelector('#book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.querySelector('#title').value,
   author = document.querySelector('#author').value,
   isbn = document.querySelector('#isbn').value;

  console.log(title, author, isbn);
  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Clear Fields
    ui.clearFields();
    // Show alert
    ui.showAlert('Book Added!', 'success');
  
  }

  

  e.preventDefault();
});
