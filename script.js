// Variable declarations
let userName = "John Doe";
const birthYear = 1990;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;


// Outputting to console
console.log(`Hello, ${userName}! You are ${age} years old.`);


// Conditional statement
if (age >= 18) {
 console.log("You are an adult.");
} else {
 console.log("You are a minor.");
}


// Custom function 1: Calculate area of a rectangle
function calculateArea(width, height) {
 return width * height;
}


// Custom function 2: Format a string
function formatString(str) {
 return str.toUpperCase();
}


// Using the functions
let area = calculateArea(5, 10);
console.log(`The area is: ${area}`);


let formattedName = formatString(userName);
console.log(`Formatted name: ${formattedName}`);


// Loop example 1: For loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
 console.log(i);
}


// Loop example 2: While loop
console.log("Counting down from 5 to 1:");
let count = 5;
while (count > 0) {
 console.log(count);
 count--;
}


// DOM interaction 1: Change the header text
document.querySelector('header h1').textContent = "Welcome to JavaScript Basics!";


// DOM interaction 2: Add a new paragraph to the main section
let newParagraph = document.createElement('p');
newParagraph.textContent = "This is a dynamically added paragraph.";
document.querySelector('main section').appendChild(newParagraph);


// DOM interaction 3: Add an event listener to the header
document.querySelector('header').addEventListener('click', function() {
 alert('Header clicked!');
});


//forEach loop example
const colors = ['red', 'green', 'blue'];
console.log("List of colors:");
colors.forEach(color => console.log(color));