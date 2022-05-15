function shelfBook(titles , shelves) {
  if ( shelves.length <= 2 ){
    return shelves.unshift(titles)
    }
  }

function unshelfBook(titles, bookShelves) {
  for ( var i = 0; i <  bookShelves.length; i++)
    if ( bookShelves[i].title.includes(titles)) {

       bookShelves.splice(i , 1)
     }
}


function listTitles(bookShelves) {
  var titles = [];
  for ( var i = 0; i < bookShelves.length; i++){
    titles.push(bookShelves[i].title)
  }
   return titles.join(", ")
}


function searchShelf(bookShelves, titles){
  for ( var i = 0; i < bookShelves.length; i++){
    if (bookShelves[i].title === titles) {
      result = true
    } else {
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
