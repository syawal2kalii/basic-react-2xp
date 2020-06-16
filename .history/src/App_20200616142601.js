import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const userlogged = "Hello World";
  const userloggedJSX = "Hello";
  return (
    <div className="App">
      {userlogged}
      {userloggedJSX}
    </div>
  );
}

export default App;
