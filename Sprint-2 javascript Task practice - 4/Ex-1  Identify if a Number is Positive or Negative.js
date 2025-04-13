// Prompt the user for input
let number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else if (number === 0) {
  console.log("The number is zero.");
} else {
  console.log("Invalid input.");
}
