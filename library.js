"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.Books = [];
    }
    Library.prototype.addBook = function (book) {
        this.Books.push(book);
        console.log("Added book: ".concat(book.getDetails()));
    };
    Library.prototype.removeBook = function (ISBN) {
        this.Books = this.Books.filter(function (book) { return book.ISBN !== ISBN; });
        console.log("Removed book with ISBN: ".concat(ISBN));
    };
    Library.prototype.listBooks = function () {
        console.log('\nLibrary Catalog:');
        this.Books.forEach(function (book) { return console.log(book.getDetails()); });
    };
    return Library;
}());
exports.Library = Library;
