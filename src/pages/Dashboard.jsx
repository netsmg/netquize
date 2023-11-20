import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzzaSTr42firr3fx5YcdXhDzB4iBLVBOM",
  authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizzesRef = collection(db, 'quizzes');
      const quizzesSnapshot = await getDocs(quizzesRef);

      const quizData = quizzesSnapshot.docs.map((doc) => {
        const quiz = doc.data();
        quiz.id = doc.id;
        return quiz;
      });

      setQuizzes(quizData);
    };

    fetchQuizzes();
  }, []);

  const handleStartQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setUserAnswers({});
  };

  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedOption,
    });
  };

  const handleSubmitQuiz = async () => {
    const correctAnswers = currentQuiz.questions.map((question) => question.correctAnswer);
    const userScore = userAnswers.questions.reduce((score, answer, index) => {
      if (answer === correctAnswers[index]) {
        score++;
      }
      return score;
    }, 0);

    const quizSubmission = {
      quizId: currentQuiz.id,
      userAnswers: userAnswers,
      score: userScore,
    };

    await addDoc(collection(db, 'quizSubmissions'), quizSubmission);

    alert(`Your score: ${userScore}`);
    setCurrentQuiz(null);
  };

  return (
    <div>
      <h1>Quiz App</h1>

      {quizzes.length > 0 ? (
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <button onClick={() => handleStartQuiz(quiz)}>
                {quiz.title}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quizzes available</p>
      )}

      {currentQuiz && (
        <div>
          <h2>{currentQuiz.title}</h2>
          <ul>
            {currentQuiz.questions.map((question, index) => (
              <li key={question.id}>
                <h3>{question.text}</h3>
                <ul>
                  {question.options.map((option) => (
                    <li key={option.id}>
                      <input
                        type="radio"
                        name={question.id}
                        value={option.text}
                        checked={userAnswers[question.id] === option.text}
                        onChange={() => handleAnswerSelection(question.id, option.text)}
                      />
                      {option.text}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmitQuiz}>Submit Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
