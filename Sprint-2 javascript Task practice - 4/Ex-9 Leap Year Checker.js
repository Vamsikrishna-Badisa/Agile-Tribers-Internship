// Prompt the user to enter a year
let year = parseInt(prompt("Enter the year:"));

// Check if the input is a valid number
if (!isNaN(year)) {
  // Leap year conditions:
  // Divisible by 4 and not by 100, OR divisible by 400
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
} else {
  console.log("Invalid input. Please enter a valid year.");
}
