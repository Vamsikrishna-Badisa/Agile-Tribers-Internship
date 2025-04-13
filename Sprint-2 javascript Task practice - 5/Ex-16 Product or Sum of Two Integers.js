function productOrSum(num1, num2) {
  let product = num1 * num2;
  
  if (product > 500) {
    return num1 + num2;  // Return sum if product is greater than 500
  } else {
    return product;  // Otherwise, return the product
  }
}

// Example usage
let result = productOrSum(30, 20);
console.log(result);  // Output will be their sum because the product (600) is greater than 500
