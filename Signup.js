import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignup = (e) => {
      e.preventDefault();
      // Add logic to handle signup
    };
  
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br></br>
  
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br></br>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <br></br>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  };
 export default Signup;