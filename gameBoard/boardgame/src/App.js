import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/Testing/body';
import Header from './Components/Testing/Header';

function App() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
