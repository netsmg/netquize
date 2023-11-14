import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// ... rest of your code


const Exam = () => {
  const [topicID, setTopicID] = useState('');
  const [title, setTitle] = useState('');
  const [noq, setNoq] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Initialize Firebase (replace with your own config)
    const firebaseConfig = {
      apiKey: "AIzaSyBzzaSTr42firr3fx5YcdXhDzB4iBLVBOM",
  authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
  measurementId: "G-0WY0798WFC"
    };

    firebase.initializeApp(firebaseConfig);

    // Create a reference to the 'quizzes' node in the database
    const database = firebase.database();
    const quizzesRef = database.ref('quizzes');

    // Push a new quiz (topic) to the 'quizzes' node
    const newQuizRef = quizzesRef.push({
      topicID,
      title,
      noq: parseInt(noq, 10), // Convert 'noq' to an integer
    });

    // Get the key of the newly added quiz
    const newQuizKey = newQuizRef.key;

    // Create a reference to the 'topics' node under the newly added quiz
    const topicsRef = quizzesRef.child(newQuizKey).child('topics');

    // Push a new topic to the 'topics' node
    topicsRef.push({
      topicID,
      title,
      noq: parseInt(noq, 10), // Convert 'noq' to an integer
    });

    // Clear form fields after submission
    setTopicID('');
    setTitle('');
    setNoq('');
  };

  return (
    <div>
      <h1>Create a Quiz</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Topic ID:
          <input type="text" value={topicID} onChange={(e) => setTopicID(e.target.value)} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Number of Questions:
          <input type="number" value={noq} onChange={(e) => setNoq(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default Exam;
