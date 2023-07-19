// quiz.js

document.getElementById('submit-btn').addEventListener('click', calculateScore);

function calculateScore() {
  const questions = document.querySelectorAll('.question');
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = question.querySelector('input[type="radio"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      const correctAnswer = getCorrectAnswer(index + 1); // Get the correct answer for the current question
      if (answer === correctAnswer) {
        score++;
      }
    }
  });

  showResults(score, questions.length);
}

function getCorrectAnswer(questionNumber) {
  // Add your correct answers here for each question (assuming "a" is correct):
  switch (questionNumber) {
    case 1:
      return "a"; // Correct answer for Question 1
    case 2:
      return "b"; // Correct answer for Question 2
    case 3:
      return "b"; // Correct answer for Question 3
    case 4:
      return "b"; // Correct answer for Question 4
    // Add more cases for additional questions as needed
    default:
      return "a"; // Default to "a" for any unknown question
  }
}

function showResults(score, totalQuestions) {
  const resultsDiv = document.querySelector('.results');
  resultsDiv.style.display = 'block';
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = `Your score: ${score} / ${totalQuestions}`;
}
