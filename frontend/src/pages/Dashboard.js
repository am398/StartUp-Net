import React from 'react';
import UserProfile from '../../components/Dashboard/UserProfile';
import StartupList from '../../components/Dashboard/StartupList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile />
      <StartupList />
    </div>
  );
};

export default Dashboard;