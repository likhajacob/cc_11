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
//Task 2 - Creating a Borrower Class

//Creating a class named Borrower using the constructor method.
class Borrower {
    constructor (name, borrowerID,) {
        this.name = name //Sources name in the instance.
        this.borrowerID = borrowerID //Sources the borrower ID in the instance.
        this.borrowedBooks = [] //Sets up an empty array for the borrowed books.
    }

    //Creating a method that adds a book title to the borrowed book array using push.
    borrowBook(book) {
        this.borrowedBooks.push(book)
    }

    //Creating a method that removes a book title from the borrowed book array using filter.
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(bk => bk !== book)
    }
}

//Creating a new borrower using the contructor.
const borrower1 = new Borrower("Alice Johnson", 201)

//Adding the Great Gatsby to the borrowed book array.
borrower1.borrowBook("The Great Gatsby")

//Logging the updated array.
console.log(borrower1.borrowedBooks)

//Removing the Great Gatsby from the borrowed book array.
borrower1.returnBook("The Great Gatsby")

//Loggine the updated array.
console.log(borrower1.borrowedBooks)
