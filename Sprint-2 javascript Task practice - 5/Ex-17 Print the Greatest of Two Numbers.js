function findGreatest(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is the greatest number.");
  } else if (num2 > num1) {
    console.log(num2 + " is the greatest number.");
  } else {
    console.log("Both numbers are equal.");
  }
}

// Example usage
findGreatest(10, 20);  // Output will be 20 is the greatest number.
