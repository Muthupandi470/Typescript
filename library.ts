import { Book } from "./books";
 
export class Library{
    private Books:Book[]=[]
    addBook(book:Book):void{
       this.Books.push(book)
       console.log(`Added book: ${book.getDetails()}`);
    }
     removeBook(ISBN: string): void {
    this.Books = this.Books.filter(book => book.ISBN !== ISBN);
    console.log(`Removed book with ISBN: ${ISBN}`);
  }
   listBooks(): void {
     console.log('\nLibrary Catalog:');
    this.Books.forEach(book => console.log(book.getDetails()));
  }
 
}