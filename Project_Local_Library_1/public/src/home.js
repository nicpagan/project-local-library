//.length property
//returns a number that represents the number of book objects inside of the array.
function getTotalBooksCount(books) {
  return books.length
}

//.length property
//returns a number that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts) {
  return accounts.length
}

// create counter
// loop through books array with forEach
// if returned === false, counter ++
//returns a number that represents the number of books that are currently checked out.
function getBooksBorrowedCount(books) {
  let counter = 0
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      counter ++
    }
  })
  return counter
}



//It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
    // empty object
    let genres = {};

    // loop through each element of book array
    books.forEach((book) => {
      //if matching genre, increment, otherwise set value = 1
      if (genres[book.genre]) {
        genres[book.genre]++;
      }
        else {
        genres[book.genre] = 1;
      }
        });
      
      //Object.entries to convert object into array [[hf, 1], [s, 3]] 
      //then .map to assign key value pairs
    let tempResults = Object.entries(genres).map(([name, count]) => {
        return {name, count};})

  //.sort to sort greatest to least, then .splice for max of 5
    let results = tempResults.sort((tempA,tempB) => tempB.count - tempA.count).splice(0,5);
    return results
    
}


function getMostPopularBooks(books) {
    // empty object
    let titles = {};

    // loop through each element of book array
    books.forEach((book) => {
      //if matching titles, increment by borrows.length, otherwise set value = 1
      if (titles[book.title]) {
        titles[book.title] += book.borrows.length
      }
        else {
          titles[book.title] = book.borrows.length
        }
        });
    
      //Object.entries to convert object into array  
      //then .map to assign key value pairs
      let tempResults = Object.entries(titles).map(([name, count]) => {
        return {name, count};})
        
      //.sort to sort greatest to least, then .splice for max of 5
      let results = tempResults.sort((tempA, tempB) => tempB.count - tempA.count).splice(0,5);
        return results
}


//returns [{}, {}, {}, {}, {}]
//use .splice(5) so it only contains 5
// obj contain author info 
// let result = {
//   "name": author.name.first + author.name.last },
//   "count": counter
// };
// find all books written by author, take borrows.length and assign to counter in result obj
//  use.sort and .splice to go greatest to least and for max of 5
function getMostPopularAuthors(books, authors) {
  let results = [];
 
  //forEach to write function to get all author info and count in object
  authors.forEach((author) => {
    let returnInfo = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
      }
      //console.log(returnInfo)
      //the, using another forEach on books arr, loop through book arr to match author id, then assign book.borrow.length to count in returnInfo
      books.forEach((book) => {
        if (author.id === book.authorId) {
          returnInfo.count += book.borrows.length;
        }
      })
      
        return results.push(returnInfo);
      });
    // console.log(results)
  //.sort to sort greatest to least, then .splice for max of 5
  return finalResults = results.sort((resA, resB) => resB.count - resA.count).splice(0,5);
  // console.log(finalResults)
}






module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
