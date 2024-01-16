/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First Item:", firstItem);
console.log("Fifth Item:", fifthItem);
console.log("Last Item:", lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
let aveValue = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log("Min:", minValue);
console.log("Max:", maxValue);
console.log("Average:", aveValue);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Python lists offer greater type flexibility, allowing heterogeneous data types
// within the same list, while JavaScript arrays typically hold elements of the same data type.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
let IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    numOfStud: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
IT114L.instructor = "Job Lipat";
console.log(IT114L.instructor);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
let courses = [
    {courseCode: "HUM039", name: "Ethics", units: 3, numOfStud: 40, instructor: "Rogelio Valenzuela"},
    {courseCode: "CS1O7L", name: "Information Management (Laboratory)", units: 1, numOfStud: 25, instructor: "Adomar Ilao"},
    {courseCode: "CS107", name: "Information Management", units: 2, numOfStud: 40, instructor: "Dahlia De Mesa"},
    {courseCode: "IT132L", name: "Logic Design and Switching", units: 1, numOfStud: 41, instructor: "Leonnel De Mesa"},
    {courseCode: "IT132", name: "Logic Design and Switching Theory", units: 2, numOfStud: 41, instructor: "Leonnel De Mesa"},
    {courseCode: "IT133", name: "Technopreneurship", units: 3, numOfStud: 40, instructor: "Khristian Kikuchi"},
    {courseCode: "IT114", name: "Web Systems and Technologies", units: 2, numOfStud: 40, instructor: "Mark Anthony Hernandez"},
    {courseCode: "IT114L", name: "Web Systems and Technologies (Laboratory)", units: 1, numOfStud: 40, instructor: "Job Lipat"}
]
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
let totalUnits = 0;

for (let course of courses) {
    totalUnits += course.units;
}

console.log("Total Units:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// In Python, I consider dictionaries to be similar to objects, as they both embrace a key-value pairing resembling that of JavaScript objects. 
// However, their distinction lies in syntax: JavaScript objects are enclosed in curly braces {},  
//  whereas Python dictionaries employ curly braces {} with colons : differentiating keys from values.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
let newNumbers = [...numbers, 90, 93, 96];

console.log("Original Numbers:", numbers);
console.log("Copied Numbers with Additional Number:", newNumbers);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
let { courseCode, units } = { ...it114l };

console.log("Course Code:", courseCode);
console.log("Units:", units);
