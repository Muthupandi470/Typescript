import { Book } from "./books";
import { Library } from "./library";
 
const myLibrary = new Library();
const book1 = new Book('The Hobbit', 'Tolkien', '9780547928227');
const book2 = new Book('Clean Code', 'Robert', '9780132350884', false);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
myLibrary.removeBook('9780547928227');
myLibrary.listBooks();