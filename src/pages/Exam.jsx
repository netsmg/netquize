import React from 'react';

const Exam = () => {
  return (
    <div className="quiz">
      <h1>MCQs Quiz</h1>

      <div className="question">
        <img src="https://i.imgur.com/666f99d4d78d7f7c" alt="C++ logo" />
        <h2>What is the correct syntax for declaring a variable in C++?</h2>

        <ul className="options">
          <li>
            <input type="radio" id="option1" name="q1" value="option1" />
            <label for="option1">int variable_name;</label>
          </li>

          <li>
            <input type="radio" id="option2" name="q1" value="option2" />
            <label for="option2">var variable_name;</label>
          </li>

          <li>
            <input type="radio" id="option3" name="q1" value="option3" />
            <label for="option3">let variable_name;</label>
          </li>

          <li>
            <input type="radio" id="option4" name="q1" value="option4" />
            <label for="option4">const variable_name;</label>
          </li>
        </ul>
      </div>

      <div className="question">
        <img src="https://i.imgur.com/6d64c8b2d385b509" alt="JavaScript logo" />
        <h2>What is the correct syntax for writing a function in JavaScript?</h2>

        <ul className="options">
          <li>
            <input type="radio" id="option5" name="q2" value="option5" />
            <label for="option5">function function_name</label>
          </li>

          <li>
            <input type="radio" id="option6" name="q2" value="option6" />
            <label for="option6">var function_name = function</label>
          </li>

          <li>
            <input type="radio" id="option7" name="q2" value="option7" />
            <label for="option7">let function_name</label>
          </li>

          <li>
            <input type="radio" id="option8" name="q2" value="option8" />
            <label for="option8">const function_name</label>
          </li>
        </ul>
      </div>

      <div className="question">
        <img src="https://i.imgur.com/a392c18c58a8f5c2" alt="Tailwind CSS logo" />
        <h2>What is the correct way to add a class to an element using Tailwind CSS?</h2>

        <ul className="options">
          <li>
            <input type="radio" id="option9" name="q3" value="option9" />
            <label for="option9">element.classList.add('class-name');</label>
          </li>

          <li>
            <input type="radio" id="option10" name="q3" value="option10" />
            <label for="option10">element.className = 'class-name';</label>
          </li>

          <li>
            <input type="radio" id="option11" name="q3" value="option11" />
            <label for="option11">element.setAttribute('class', 'class-name');</label>
          </li>

          <li>
            <input type="radio" id="option12" name="q3" value="option12" />
            <label for="option12">element.style.class = 'class-name';</label>
          </li>
        </ul>
      </div>

      <button>Submit Quiz</button>
    </div>
  );
};

export default Exam;
