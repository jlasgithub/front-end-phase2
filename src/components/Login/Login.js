import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const REST_URL = 'http://localhost:8081/account';



  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    let body = JSON.stringify(user);
    console.log(`${body}`)
    const headers = {
      "Content-Type": "application/json",

    };
    console.log('Request body:', body);
    try {
      const response = await axios.post(`${REST_URL}/token`, body, { headers }, );
      console.log("in here");
      if(response.data.success)  {
        console.log("appke")
      }
    } catch(error){
          console.error("error fetching customers: ", error);}
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <a href = '/register'>
          don't have an account? sign up here 
        </a>
        <button type="submit" className="button-85">
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
