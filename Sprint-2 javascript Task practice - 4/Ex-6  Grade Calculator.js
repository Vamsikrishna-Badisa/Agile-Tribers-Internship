// Prompt the user for the student's score
let score = parseFloat(prompt("Enter the student's score (0-100):"));

// Check if the score is within a valid range
if (!isNaN(score) && score >= 0 && score <= 100) {
  let grade;

  // Determine the grade based on the score
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else if (score >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  console.log(`Score: ${score} - Grade: ${grade}`);
} else {
  console.log("Invalid input. Please enter a score between 0 and 100.");
}
