const readline = require('readline');

// Create interface for reading terminal input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform arithmetic operations
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Error: Division by zero';
            }
            return a / b;
        default:
            return 'Invalid operator';
    }
}

// Prompt user for inputs
rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operation (+, -, *, /): ', (operator) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            // Validate inputs
            if (isNaN(a) || isNaN(b)) {
                console.log('Error: Please enter valid numbers.');
            } else {
                const result = calculate(a, b, operator);
                console.log(`Result: ${a} ${operator} ${b} = ${result}`);
            }

            rl.close();
        });
    });
});
