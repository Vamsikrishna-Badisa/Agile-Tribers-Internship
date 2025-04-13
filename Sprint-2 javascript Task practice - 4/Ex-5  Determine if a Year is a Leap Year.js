// Prompt the user to enter a year
let year = parseInt(prompt("Enter a year:"));

// Check if the input is a valid number
if (!isNaN(year)) {
  // Leap year logic
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
} else {
  console.log("Invalid input. Please enter a valid year.");
}
