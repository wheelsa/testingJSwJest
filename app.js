
export const originalArray = (arr) => {
  return arr
}

// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME
// ways to export
// export const methodName = (param) => {
// }
// ----or---------
// export methodName function(param){
// }
// numberArray = [1,2,3,4]
// ARRAY ITERATOR METHODS
// return array with double values in array
// doubleArray(numberArray) // => [2,4,6,8];  hint use map 

export const doubleArray = (numberArray) => {
  return numberArray.map(i => i * 2)
}
// return array with all even numbers


export const evensOnlyArray= (numberArray) => {
  function mustBeEven(number){
    return number % 2 == 0
  }
  return numberArray.filter(mustBeEven)
}
// => [2,4,6,8];  hint use filter 


// return array with sum of numbers
export const arraySum = (numberArray) => {
  function reduceArray(accumulate, value){
    return accumulate + value;
  }
  let result = numberArray.reduce(reduceArray)
  return result
  };
 // => 10;  hint use reduce
// return true if every item greater than 0
export const allNumbersGreaterThanZero = (numberArray) => {
  function greaterThanZero(arrayEntry){
  return arrayEntry > 0 }
  return numberArray.every(greaterThanZero)
} 
// => true; use every

// return true if some item greater than 0
export const someNumbersAreOdd = (numberArray) => {
  function numberIsOdd(number){
    return number % 2 != 0
  }
  return numberArray.some(numberIsOdd)
}
 // => true; use some
// return array double and even
export const evensOnlyAndDoubleArray = (numberArray) =>{

  let numberArrayDouble = numberArray.map(i => i * 2)
  function mustBeEven(number){
    return number % 2 == 0
  }
  return numberArrayDouble.filter(mustBeEven)
}

// find an item method return 'not found' if not found
export const findItem = (numberArray, number = 1) => {
  let numberArrayFind = numberArray.find(function findElement(element){
    return element = number;
  }, number)

  if (number == numberArrayFind)
    return numberArrayFind
  else
    return 'Not Found'

} 



export const sortArray = (numberArray) => {
  let numberArraySorted = numberArray.sort()
  return numberArraySorted.reverse()
}

//=> [4,3,2,1] *desc*

// artists = [
//   {name: 'a', likes:100},
//   {name: 'c', likes:99},
//   {name: 'c', likes:101}, 
// ]
// // ARRAY ITERATOR METHODS ON Objects with name age 
// // doubles likes of artist
// doubleLikes(artists)
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 
// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter
// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes
// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}
// // returns array of artist sorted by likes
// sortArtistByName(artists)