// Assuming your useQuiz hook looks something like this:

// useQuiz.js
import { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';

function useQuize(quizId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const quizRef = ref(db, `quizzes/${quizId}`);

      try {
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          const quizData = snapshot.val();
          setQuiz(quizData.questions); // Assuming questions is an array of all questions
        } else {
          setError('Quiz not found');
        }
      } catch (error) {
        setError('Error fetching quiz data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [quizId]);

  return { loading, error, quiz };
}

export default useQuize;
