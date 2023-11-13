import React, { useState, useEffect } from 'react';

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    // Fetch questions from JSON or your API
    // Replace 'path/to/questions.json' with your actual path
    fetch('questions.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  const handleAnswerSelect = (questionId, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    // Handle submission logic here, e.g., calculate score, show results, etc.
    console.log('Selected Answers:', selectedAnswers);
    // Redirect to the result page or perform other actions based on the user's answers
  };

  return (
    <div className="exam-container">
      <h1>Exam</h1>
      {questions.map((question) => (
        <div key={question.id} className="question-container">
          <h3>{question.text}</h3>
          <ul>
            {question.options.map((option) => (
              <li key={option.id}>
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option.id}
                    checked={selectedAnswers[question.id] === option.id}
                    onChange={() => handleAnswerSelect(question.id, option.id)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Exam;
