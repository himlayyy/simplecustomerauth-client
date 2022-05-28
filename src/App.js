import "./App.css";
import React from "react";
import Router from "./Router";
import axios from "axios";
import {AuthContextProvider} from "./context/AuthContext";

axios.defaults.withCredentials = true;
// import Router from "./components/layout/Router";

// import Router from "./Router";
// import { Routes, Route } from "react-router-dom";
// import Router from 

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>

    // <>
    //   <Router />
    // </>
  );
}

export default App;
