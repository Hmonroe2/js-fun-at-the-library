//create function called shelfBook with two parameters
// functions should add books 'titles' to a specific shelf 'shelves'
// should repeat action to add another book
// should only hold a certain number of books
function shelfBook(titles , bookShelves) {
  if ( bookShelves.length <= 2 ){
    return bookShelves.unshift(titles)
    }
  }


//create function named 'unshelfBook' add  same 2 parameters
function unshelfBook(titles, bookShelves) {
  for ( var i = 0; i <  bookShelves.length; i++)
    if ( bookShelves[i].title.includes(titles)) { // if bookshelves contains titles
        //console.log(bookShelves)
       bookShelves.splice(i , 1) //removes contents of array
     }
}

// Create function named 'listTitles' add one parameter 'bookShelves'
function listTitles(bookShelves) {
  var titles = []; // create empty array
  for ( var i = 0; i < bookShelves.length; i++){ //loop through to list all titles
    titles.push(bookShelves[i].title) // add elements to end of array
  }
   return titles.join(", ") // concates elements into one string
}

//create function named 'searchShelf' with 2 parameters
function searchShelf(bookShelves, titles){
  for ( var i = 0; i < bookShelves.length; i++){ //loop through each shelf
    if (bookShelves[i].title === titles) {//if title === titles return boolean true 
      result = true
    } else {// if title !== titles return boolean false
      result = false
    }
      }
        return result
  }



// Goals Output Iunput Steps














module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
