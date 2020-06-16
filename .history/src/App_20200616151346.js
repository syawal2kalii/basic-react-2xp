import React from 'react';
import './App.css';

function App() {
  const userlogged = "Hello World";
  const userloggedJSX = <strong> Syawal</strong>
  return (
    <div className="App">
      {userlogged}
      {userloggedJSX}
    </div>
  );
}

export default App;
