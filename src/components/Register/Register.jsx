import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const Register = () => {
  const REST_URL = 'http://localhost:8081/account';

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');


  // Function to generate a random BigInt within a specified range
function generateRandomBigInt() {
  const length = 10;
  // Generate a random number as a string of the specified length
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // Append a random digit
  }
  
  // Convert the result string to BigInt
  return Number(result);
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: userName,
      email: email,
      password: password,
    };
    console.log(`${user}`);
    console.log("this is it");
    let body = JSON.stringify(user);
    console.log(`${body}`);
    console.log("body here^");
    let myHeaders = new Headers({"Content-Type":"application/json"});
    const headers = {
      "Content-Type": "application/json",
    };
    var myInit = {
      method: 'POST',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    }
    try {
      const response = await axios.post(`${REST_URL}/register`, body, { headers });      if(response.data.success)  {
        console.log("help");
      }
    } catch(error){
          console.error("error fetching customers: ", error);}
    navigate('/');
    alert('Registration successful');
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


