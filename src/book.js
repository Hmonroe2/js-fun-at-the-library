function createTitle(title) {
return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return{
  name: name ,
  age: age ,
  pronouns: pronouns ,
  }
}
// // check array for duplicates
// function saveReview(customerReview,reviews){
//   //reviews.push(customerReview);
//
//   if( reviews.include(customerReview) ) {
//   } else {
//     reviews.push( customerReview )
//   }
//   return reviews
// };

function saveReview( customerReview, reviews){
  if (reviews.includes(customerReview) ) {
  } else {
    reviews.push(customerReview)
  }
  // return reviews
};
function calculatePageCount(bookTitle) {
  for ( var i = 0; i < bookTitle.length; i ++) {
  return bookTitle.length * 20
  }
}
//

function writeBook (bookTitle, bookCharacter, genre){
return{
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre,
}
return calculatePageCount
}


// function editBook(newPageCount, pages){
//   for (var i = 0; i < newPageCount.length; i++)
//   return pageCount * 0.75
//   }

function editBook(newPageCount){
  newPageCount.pageCount =  newPageCount.pageCount * .75
  console.log(editBook)
}








module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
