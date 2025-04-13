// Given array of numbers
let numbers = [3, 4, 5, 6];

// Function to calculate factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Loop through each number in the array and calculate factorial
for (let i = 0; i < numbers.length; i++) {
  let fact = factorial(numbers[i]);
  console.log(`Factorial of ${numbers[i]} is ${fact}`);
}
