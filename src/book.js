
// create function called 'createTitle'
//create function with the parameter of title
function createTitle(title) {
  // return 'the' with parameter.
  // pass arguments into parameter.
return `The ${title}`
}// expected return 'The 'title' '


// create buldMainCharacter function with 3 parameters
// function should create a character object
//take in object key values
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


// create function called 'saveReview' with two parameters.
// function should add reviews to an array
// function should add to a existing array
// function should check for duplicates
function saveReview( customerReview, reviews){
  // if reviews contains a duplicate customer review do no return
  if (reviews.includes(customerReview) ) {
  // if customer review doesnt not match add customer review.
  } else {
    reviews.push(customerReview)
    }
  // retrun the reviews that are unique
  return reviews
}
// function saveReview ( customerReview, reviews) {
//   var isIncluded
//     for( var i = 0; i < reviews.length; i++) {
//     if (reviews[i] === customerReview) {
//       isIncluded = true
//     } else {
//
//     }
//
//   if (isIncluded ) {
//
// } else {
//   reviews.push(userReview)
//
// }


// create function called ' calculatePageCount' with one parameter
// function should at 20 pags per letter in title
function calculatePageCount(bookTitle) {
  // run loop for var i start in 0 index; run the length of titles
  // iterate by 1 each time.
  for ( var i = 0; i < bookTitle.length; i ++) {
    //return bookTitle length times 20
  return bookTitle.length * 20
  }
}
//


// create function called 'writeBook' with three parameters.
// return an object with key value pairs
// should take in 'calculatePageCount function' as a value for key 'pageCount
// should take in different book objects.
function writeBook (bookTitle, bookCharacter, genre){
return{
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre,
  }
//return calculatePageCount
}


// function editBook(newPageCount, pages){
//   for (var i = 0; i < newPageCount.length; i++)
//   return pageCount * 0.75
//   }
// create function called 'editBook' with one parameter
// function should take pageCount and reduce it by 3/4.
// provide newPageCount
function editBook(newPageCount){
  newPageCount.pageCount =  newPageCount.pageCount * .75
  //console.log(editBook)
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
