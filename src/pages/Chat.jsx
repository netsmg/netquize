import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Chat = ({ quizId }) => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const leaderboardRef = firebase.database().ref(`leaderboards/${quizId}`);

    // Listen for real-time updates
    leaderboardRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert data to an array or process as needed
        const leaderboardData = Object.entries(data).map(([userId, score]) => ({
          userId,
          score,
        }));
        setLeaderboard(leaderboardData);
      }
    });

    return () => {
      // Clean up the listener when component unmounts
      leaderboardRef.off('value');
    };
  }, [quizId]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry) => (
          <li key={entry.userId}>
            {entry.userId}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
