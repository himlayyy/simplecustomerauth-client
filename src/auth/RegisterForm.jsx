import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const {getLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();


  async function register (e){
    e.preventDefault();
    try{
      const registerData={
        email, 
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData,{
        withCredentials:true,
      });
      await getLoggedIn();
      navigate("/");
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
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
        <input 
          type="password" 
          placeholder="Verify password"
          onChange={(e) =>setPasswordVerify(e.target.value)}
          value={passwordVerify}/>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default RegisterForm