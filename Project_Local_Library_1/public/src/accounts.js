
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



//ADDED .reduce() METHOD AS PER REVISION REQUEST
//returns a num that represents the number of times the accounts ID appears in book's 'borrow' array
//use books.reduce() to get array of borrows
//books[i].borrows --> item.borrows
// identify borrows and iterate
function getTotalNumberOfBorrows(account, books) {
  //use reduce method on books array
  let results = books.reduce((accumulator, item) => {
    //return the acc array(empty array) and the use .concat to merge acc array and items.borrows array.
    //const array3 = array1.concat(array2);
    return accumulator.concat(item.borrows)
  }, []);
    // console.log("results", results)
      //results [
      // { id: '5f446f2ea6b68cf6f85f6e28', returned: true },
      // { id: '5f446f2ead0070f44676f2f6', returned: true },
      // { id: '5f446f2e2cfa3e1d234679b9', returned: false },
  
      //create counter to hold total number of borrows
      let counter = 0;
      //use .forEach to loop through each result of results array
      results.forEach((result) => {
        if (result.id === account.id) {
          counter ++
          //if result.id matches the account.id, increment counter
        }
      })
      return counter;
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
