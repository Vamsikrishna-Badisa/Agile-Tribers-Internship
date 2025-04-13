// Prompt the user for input
let number = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (!isNaN(number)) {
  // Check if the number is even or odd
  if (number % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
s