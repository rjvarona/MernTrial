import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


import Navbar from "./components/Navbar";
import Users from "./components/UserComponent";
import YeetPublic from "./components/YeetComponent";
import Coronavirus from "./components/CoronavirusComponent";



import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
        <Navbar/>
        <br/>
        <Route path="/" />
        <Route path="/yeets" component={YeetPublic}/>
        <Route path="/coronavirus" component={Coronavirus}/>

    </Router>
  );
}

export default App;
