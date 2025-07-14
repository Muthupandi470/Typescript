export class Book{
    constructor(
   public title: string,
   public author: string,
   public ISBN: string,
   public available: boolean = true
 ) {}
 getDetails(): string {
   return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Available: ${this.available}`;
 }
}