function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Example usage:
console.log(divide(10, 2));    // Output: 5
console.log(divide(9, 3));     // Output: 3
console.log(divide(7, 0));     // Output: Error: Division by zero is not allowed.
