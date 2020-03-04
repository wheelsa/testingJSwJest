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