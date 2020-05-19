import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


import Navbar from "./components/Navbar";
import Users from "./components/UserComponent";
import YeetPublic from "./components/YeetComponent";



import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
        <Navbar/>
        <br/>
        <Route path="/" component={YeetPublic}/>
        <Route path="/users" component={Users}/>

    </Router>
  );
}

export default App;
