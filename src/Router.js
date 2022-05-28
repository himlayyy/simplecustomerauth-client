import React, {useContext} from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/layout/Home';
import Register from './components/layout/Register';
import Login from './components/layout/Login';
import Logout from './components/layout/Logout';
import Customer from './components/layout/Customer';
import Navbar from './components/layout/Navbar';
import AuthContext from './context/AuthContext'

function Router() {
  const {loggedIn} = useContext(AuthContext);

  return (
    <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}>Home</Route>
            {
              loggedIn === false && 
              <>
                <Route exact path="/register" element={<Register/>}>
                Register
                </Route>
                <Route exact path="/login" element={<Login/>}>Log In            
                </Route>
              </>
            }
            {
              loggedIn === true && 
              <>
                 <Route exact path="/logout" element={<Logout/>}>Log Out</Route>
                <Route exact path="/customer" element={<Customer />}>Customer</Route>
              </>
            }
           
        </Routes>
    </>
  )
}

export default Router