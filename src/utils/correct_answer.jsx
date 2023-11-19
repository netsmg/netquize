import React from 'react';

const correctAnswer = [
  {
    value: 'A',
  },
  {
    value: 'B',
  },
  {
    value: 'C',
  },
  {
    value: 'D',
  }
];

function CorrectAnswerRadioButtons() {
  return (
    <div>
      {correctAnswer.map(answer => (
        <label key={answer.value}>
          <input type="radio" name="correctAnswer" value={answer.value} />
          {answer.value}
        </label>
      ))}
    </div>
  );
}

export default CorrectAnswerRadioButtons;
