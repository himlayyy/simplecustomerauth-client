import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {getLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  async function login (e){
    e.preventDefault();
    try{
      const loginData={
        email, 
        password,
      };
      await axios.post("https://simplecustomerauth.herokuapp.com/auth/login", loginData);
      // await axios.post("http://localhost:5000/auth/login", loginData);
      await getLoggedIn();
      navigate("/");
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <>
      <h1>Log in to your account</h1>
      <form onSubmit={login}>
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) =>setEmail(e.target.value)}
          value={email}/>
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) =>setPassword(e.target.value)}
          value={password}/>
        <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default LoginForm