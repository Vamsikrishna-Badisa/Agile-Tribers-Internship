function findGreatestOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the greatest number.");
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the greatest number.");
  } else {
    console.log(num3 + " is the greatest number.");
  }
}

// Example usage
findGreatestOfThree(10, 20, 30);  // Output will be 30 is the greatest number.
