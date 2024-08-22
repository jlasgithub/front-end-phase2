import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Register:', email, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label">
          Username:
          <input
            type="userName"
            value={userName}
            onChange={(e) => setName(e.target.value)}
            required
            className="textbox"
          />
        </label>
        <label className="login-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="textbox"
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="textbox"
          />
        </label>
        <button type="submit" className="button-85">
          <span>Register</span>
        </button>
      </form>
    </div>
  );
};

export default Register;


