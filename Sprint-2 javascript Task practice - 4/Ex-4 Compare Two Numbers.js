// Prompt the user for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Check if both inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  // Compare the numbers
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}.`);
  } else if (num2 > num1) {
    console.log(`${num2} is greater than ${num1}.`);
  } else {
    console.log("Both numbers are equal.");
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
