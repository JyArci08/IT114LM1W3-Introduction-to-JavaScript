
// Todo 5.4.1 Create a function called add that takes in two numbers and returns their sum
function add(number1, number2) {
    return number1 + number2;
  }
  
  let result = add(5, 7);
  console.log(result);

// Todo 5.4.2 Create a constant that contains the approximate value of PI 
const valPI = 3.14159;

// Todo 5.4.3 Export the function and constant
module.exports = {
  valPI,
  add
};
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
