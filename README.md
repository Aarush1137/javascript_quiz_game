<body>
  <h1>JavaScript Quiz Game</h1>

  <h2>Overview</h2>
  <p>JavaScript Quiz Game is a simple web-based quiz game built using HTML, CSS, and JavaScript. The game presents multiple-choice questions to the user, allows them to select their answers, and calculates their score at the end.</p>

  <h2>Project Structure</h2>
  <pre>
📂 javascript_quiz_game
    📂 css
        📄 styles.css
    📂 js
        📄 quiz.js
    📄 index.html
    📄 README.md
  </pre>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <p>To run the JavaScript quiz game locally, you need a web browser with JavaScript enabled.</p>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository to your local machine:</li>
    <pre>
git clone https://github.com/Aarush1137/javascript-quiz-game.git
    </pre>
    <li>Open the <code>index.html</code> file in your web browser.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>You will see multiple-choice questions displayed on the web page.</li>
    <li>Select the correct answer for each question.</li>
    <li>Click the "Submit Answers" button to see your score.</li>
  </ol>

  <h2>Adding/Removing Questions</h2>
  <p>To add or remove questions from the quiz game, follow these steps:</p>
  <ol>
    <li>Open the <code>index.html</code> file in a text editor.</li>
    <li>Copy one of the existing question divs (e.g., <code>&lt;div class="question"&gt;...&lt;/div&gt;</code>).</li>
    <li>Paste the copied div below the last question div and modify the question and answer options accordingly.</li>
    <li>To remove a question, simply delete its corresponding question div.</li>
  </ol>

  <h2>Customizing Correct Answers</h2>
  <p>To customize correct answers for each question, open the <code>quiz.js</code> file in a text editor and locate the <code>getCorrectAnswer()</code> function. Update the <code>switch</code> statement with the correct answers for each question.</p>
  <pre>
function getCorrectAnswer(questionNumber) {
  switch (questionNumber) {
    case 1:
      return "a"; // Correct answer for Question 1
    case 2:
      return "b"; // Correct answer for Question 2
    // Add more cases for additional questions as needed
    default:
      return "a"; // Default to "a" for any unknown question
  }
}
  </pre>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>

  <h2>Acknowledgments</h2>
  <ul>
    <li>This project is part of my learning journey to improve my JavaScript skills.</li>
  </ul>
</body>
</html>
