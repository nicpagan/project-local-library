
//findAccountById()
// do a find to find id
// id = accounts.id
//returns the account object with matching id
function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
    return foundAccount;
}



//sortAccountsByLastName()
// .sort to sort by last name
// last name = accounts.name.last
// step 1: declare variable and define what will be sorted
// step 2: return and state how you will be sorting them --> (nameA,nameB)
        //  if (nameA < nameB) //sort string ascending
        //   return -1;
        //  if (nameA > nameB)
        //   return 1;
// return declared variable with sorted accounts
function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1;
});
return sortedAccounts;
}



// return num
// create counter to increment
// iterate books arr w/ for...of: for(let element of arr)
// extract all transactions from borrows: element.borrows >> book.borrows
// .forEach on arr of transactions to execute function once for every arr element
// (transaction)=> if transaction.id === account.id, increment counter
// exit for...of loop and return counter
//
function getTotalNumberOfBorrows(account, books) {
  //declare counter  
  let counter = 0;
    //iterate through books arr to look at each element
    for (let book of books) {
      //extract transactions from borrows element (looking at value of borrows)
      let transactions = book.borrows
      // for each element in transactions, execute function
      transactions.forEach((transaction) => {
        //check if transaction.id matched account.id  
        if(transaction.id === account.id) {
          //incrementing counter  
          counter ++
          }
        })
  }
  //returning counter
  return counter
}




// use forEach to execute function on each element in books
// find books that are checked out that have matching account ids
// forEach on obj of arr of authors
//if book has not been returned and account id matches borrow id...
//and if author id matches a books author id, assign author name and book title to new results obj
//push obj into booksOut arr
//returns [{}]
function getBooksPossessedByAccount(account, books, authors) {
  
  let booksOut = [];

  books.forEach(book => {
   // execute function on each book element in books arr;
    if (book.borrows[0].returned === false &&
        book.borrows[0].id === account.id) {
          //run next code ONLY IF the book is not returned and if the account id matches the borrowed id
          authors.forEach(author => {
          // execute function on each author element in authors arr;
          //run next code ONLY IF author id === book.authorId
            if (author.id === book.authorId){
              let result = {
                "author": {"name": author.name },
                "title": book.title,
              };
              //if all conditions are met at this point, create new obj called results.
              // assign it the value of 2 key value pairs. key "author" and "title", assigning the corresponding values
              booksOut.push(result);
              //push results into booksOut
            }  
          })        
    }    
  });
  return booksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
