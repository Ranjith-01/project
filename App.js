import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
    <h id="head"><b>Welcome To Alasa... </b></h><br></br>
    <morquee>hey viewer hello!!!</morquee>
    <LoginPage/><br></br>
  
    
    <a href=''>Signup</a>
    
    
    </div>
  );
};

export default App;
