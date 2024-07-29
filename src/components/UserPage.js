// src/components/UserPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const UserPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="user-page">
      {isSignUp ? <SignUpForm toggleForm={toggleForm} /> : <LoginForm toggleForm={toggleForm} />}
    </div>
  );
};

export default UserPage;
    