/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const sqrdNums = numbers.map(function(number) {
    return number * number;
  });
  
  console.log(sqrdNums);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNums = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNums);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
  }, 0);
  
  console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world', 'and', 'git'];
const uppercaseWords = words.map(function(word) {
    return word.toUpperCase();
  });
  
  console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(function(word) {
    return word.length > 4;
  });
  
  console.log(longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce(function (accumulator, currentWord) {
    return accumulator + ' ' + currentWord;
  }, '');
  
  console.log(concatenatedString.trim());

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Basically, map transforms each element in an array using a provided function, generating a new array.
// Filter creates a new array by selectively including elements based on a specified condition. 
// Reduce iterates over array elements, accumulating a single result using a combining function. 

//Done in all guided exercises