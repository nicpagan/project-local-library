//HELPER FUNCTION
function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
    return foundAccount;
}



// do a find to find id
// id = accounts.id
// check if author.id === id
// returns the author object that has matching id
function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}



// do a find to find id
// id == books.id
// check is books.id === id
//returns the book object that has the matching ID.
function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}



// The first array contains books _that have been loaned out, and are not yet returned_ while the second array contains books _that have been returned._
// borrowed books: book[i].borrows.returned === false
// use filter to distinguish which are true (let loanedBooks =), and which are false (let returnedBooks =)
//.filter((book) => book.borrows[0].returned === false)
// return both at end with return = [loanedBooks, returnedBooks]
//// results = [[x],[y]]

function partitionBooksByBorrowedStatus(books) {
  //filter which are loaned out 
  let loanedBooks = books.filter((book) => book.borrows[0].returned === false);
  //filter which are returned
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  //returning both inside new arr
  const results = [loanedBooks, returnedBooks];

  return results;
}



// need to add matching accnt info to corresponding transaction in borrows array
// isolate borrow key in variable: book.borrows
//use .map() on transactions variable to transform each value of array into a different value
// 1st find matching accnt info with helper function findAccountByID, capture in variable
// 2nd use spread operator to include info from transaction and accountInfo in object, and capture in variable
// .splice(10) to limit to 10
// return results = [{}]
function getBorrowersForBook(book, accounts) {
 // create array of transactions from the given book
 const transactions = book.borrows;

 // use map to on transactions arr to transform values of arr (ie add accnt info)
 let results = transactions.map((transaction) => {
   //helper function to find account by id
   let accountInfo = findAccountById(accounts, transaction.id);
   //spread operator to have each transaction obj in arr include accnt info
   let newTransactions = {...transaction, ...accountInfo};
   return newTransactions;
 })
// limit the amount of transactions to 10
 results.splice(10);
// return 
return results;

}
 



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
