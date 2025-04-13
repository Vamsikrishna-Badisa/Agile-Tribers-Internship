// Prompt the user to enter their age
let age = parseInt(prompt("Enter your age:"));

// Check if the input is a valid number and non-negative
if (!isNaN(age) && age >= 0) {
  let message;

  // Determine message based on age range
  if (age < 16) {
    message = "You can't drive.";
  } else if (age >= 16 && age <= 17) {
    message = "You can drive but not vote.";
  } else if (age >= 18 && age <= 24) {
    message = "You can vote but not rent a car.";
  } else {
    message = "You can do pretty much anything.";
  }

  console.log(`Age: ${age} - ${message}`);
} else {
  console.log("Invalid input. Please enter a valid age.");
}
