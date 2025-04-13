// Prompt the user for base and exponent
let base = parseFloat(prompt("Enter the base:"));
let exponent = parseFloat(prompt("Enter the exponent:"));

// Check if both inputs are valid numbers
if (!isNaN(base) && !isNaN(exponent)) {
  // Calculate the power
  let result = Math.pow(base, exponent);
  console.log(`${base} raised to the power of ${exponent} is ${result}`);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
