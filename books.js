"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, ISBN, available) {
        if (available === void 0) { available = true; }
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.available = available;
    }
    Book.prototype.getDetails = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author, ", ISBN: ").concat(this.ISBN, ", Available: ").concat(this.available);
    };
    return Book;
}());
exports.Book = Book;
