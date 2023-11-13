

const Result = ({ selectedAnswers }) => {
  // Implement your result calculation logic based on selected answers
  // For simplicity, assuming correct answers are known in advance
  const correctAnswers = {
    // Map question IDs to correct option IDs
    // Replace these with the actual correct answers from your data
    1: 'A',
    2: 'C',
    3: 'D',
    4:	'E',
    // Add more as needed
  };

  const calculateScore = () => {
    let score = 0;
    for (const questionId in selectedAnswers) {
      if (selectedAnswers[questionId] === correctAnswers[questionId]) {
        score++;
      }
    }
    return score;
  };

  const score = calculateScore();

  return (
    <div className="result-container">
      <h1>Result</h1>
      <p>Your Score: {score} out of {Object.keys(selectedAnswers).length}</p>
      {/* Display more result details or feedback as needed */}
    </div>
  );
};

export default Result;
