import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

// Assuming `app` is already initialized

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    const database = getDatabase(app);
    const quizRef = ref(database, 'quizzes/quiz1'); // Adjust path accordingly

    try {
      const snapshot = await get(quizRef);
      const fetchedQuizData = snapshot.val();
      setQuizData(fetchedQuizData);
    } catch (error) {
      console.error('Error fetching quiz data:', error.message);
      // Handle error appropriately
    }
  };

  return (
    <div>
      {quizData ? (
        // Render quiz components with quizData
        <div>Quiz Questions Go Here</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Exam;
