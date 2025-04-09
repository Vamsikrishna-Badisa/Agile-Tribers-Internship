// Declare an array
const fruits = ["apple", "banana", "cherry", "date"];

// Access elements by index
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);

// Add an element to the end
fruits.push("elderberry");
console.log("After push:", fruits);

// Remove the last element
fruits.pop();
console.log("After pop:", fruits);

// Add an element to the beginning
fruits.unshift("avocado");
console.log("After unshift:", fruits);

// Remove the first element
fruits.shift();
console.log("After shift:", fruits);

// Find index of an element
const index = fruits.indexOf("banana");
console.log("Index of 'banana':", index);

// Check if an element exists
const hasMango = fruits.includes("mango");
console.log("Contains 'mango'?", hasMango);

// Length of the array
console.log("Total fruits:", fruits.length);
