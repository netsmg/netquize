import React from 'react';

const categoryQuiz = [
  {
    value: 'javascript',
    label: 'JavaScript'
  },
  {
    value: 'php',
    label: 'PHP'
  },
  {
    value: 'python',
    label: 'Python'
  },
  {
    value: 'html',
    label: 'HTML'
  },
  {
    value: 'css',
    label: 'CSS'
  },
];

function QuizCategorySelect() {
  return (
    <select>
      {categoryQuiz.map(category => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}

export default QuizCategorySelect;
