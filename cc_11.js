//Task 1 - Creating a Book Class

//Creating a class called book that uses the constructor method.
class Book {
    constructor (title, author, isbn, copies) {
        this.title = title //Sources title in the instance.
        this.author = author //Sources author in the instance.
        this.isbn = isbn //Sources isbn in the instance.
        this.copies = copies //Sources copies in the instnace.
    }

    //Creating a method that retrieves the details of a book and returns it using a template literal.
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }

    //Creating a method that updates the copies avilable when a book is checked out or returned.
    updateCopies(quantity) {
        this.copies += quantity //Adds the quantity to the copies to allow for a negative number to represent a check out and a positive number to represent a return.
    }
}

//Creating a new book using the consstructor.
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5)

//Logging the new book's details using getDetails.
console.log(book1.getDetails())

//Updating the copies by representing someone checking out a copy.
book1.updateCopies(-1)

//Logging the updated details after the check out.
console.log(book1.getDetails())
