import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero, 
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
  doubleLikes,
  moreThan100Likes,
  numberOfLikes,
  findObjByName,
  sortArtistByName
} from '../app'

//hint look into before_each before_all

describe('originalArray Tests', () => {
  test('Original Array should return itself ', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })})

  describe('doubleArray Tests', () => {
    test('Original Array should double itself ', ()=>{
      expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
    })})


  describe('evensOnlyArray Tests', () => {
    test('Array should filter to only even numbers ', ()=>{
      expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
    })})


  describe('arraySum Tests', () => {
    test('Sum array elements into a single output(numbers)', ()=>{
      expect(arraySum([1,2,3,4])).toEqual(10)
    })})

  describe('allNumbersGreaterThanZero Tests', () => {
    test('Array all entries > 0 returns true', ()=>{
      expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
    })
    test('Array any entries <  0 returns false', ()=>{
      expect(allNumbersGreaterThanZero([-1, 1,2,3,4])).toEqual(false)
    })
  })

  describe('someNumbersAreOdd Tests', () => {
    test('there is an odd number in the array returns true', ()=>{
      expect(someNumbersAreOdd([4,2,7,4,8])).toEqual(true)
    })
    test('there is an not an odd number in the array returns false', ()=>{
      expect(someNumbersAreOdd([4,2,10,4,8])).toEqual(false)
    })
  })

  

  describe('evensOnlyAndDoubleArray Tests', () => {
    test('Array values should double and be filtered by even, include decimal to get odd number', ()=>{
      expect(evensOnlyAndDoubleArray([1.5,2,7,8])).toEqual([4,14,16])
    })
  })


  describe('findItem Tests', () => {
    test('Given inputted number, finds that number in an array', ()=>{
      expect(findItem([1,2,7,8])).toEqual(1)
    })
    test('Given a number to find in array, if number not in an array, return string "Not Found"', ()=>{
      expect(findItem([2,2,7,8])).toEqual('Not Found')
    })
  }) 


  describe('sortArray Tests', () => {
    test('Given an array, sort array in desc order', ()=>{
      expect(sortArray([1,7,2,8])).toEqual([8,7,2,1])
    })
  
  }) 





describe('doubleLikes Tests', () => {
  test('Given an object array, double likes', ()=>{

    let artists = [
      {name: 'a', likes:100},
      {name: 'c', likes:99},
      {name: 'c', likes:101}, ]
  
    expect(doubleLikes(artists)).toEqual([ {name: 'a', likes:200},
    {name: 'c', likes:198},
    {name: 'c', likes:202},
   ])
 })
}) 

describe('moreThan100Likes Tests', () => {
  let artists = [
    {name: 'a', likes:100},
    {name: 'c', likes:99},
    {name: 'c', likes:101}, ]

  test('Given an object array, return artist with over 100 likes', ()=>{
    
    expect(moreThan100Likes(artists)).toEqual([{name: 'c', likes:101}])
  })
  test('Given a number to find in array, if number not in an array, return string "Not Found"', ()=>{
    expect(findItem([2,2,7,8])).toEqual('Not Found')
  })
}) 
let artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}, ]

describe('numberOfLikes Tests', () => {

  test('Given an object array, return total number of likes', ()=>{
    
    expect(numberOfLikes(artists)).toEqual(300)
  })
}) 



describe('findObjByName Tests', () => {

  test('Given an object array, find obj by input name', ()=>{
    
    expect(findObjByName(artists,"a")).toEqual([{name: 'a', likes:100}])
  })
}) 

describe('sortArtistByName Tests', () => {

  test('Given an object array, sort object by number of likes', ()=>{
    
    expect(sortArtistByName(artists)).toEqual([
      {name: 'c', likes:99},
      {name: 'a', likes:100},
      {name: 'c', likes:101}, ]
    )
  })
}) 

