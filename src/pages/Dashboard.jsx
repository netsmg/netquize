
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Link to="/exam">Start Exam</Link>
      {/* Add other dashboard components or links as needed */}
    </div>
  );
};

export default Dashboard;
