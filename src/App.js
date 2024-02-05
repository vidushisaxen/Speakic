import './App.css';
import React from 'react';
import Login from './components/login';
import NavSide from './components/NavSide';
import Conversion from './components/conversion';

function App() {
  return (
    // <Login></Login>
    <>
      <NavSide></NavSide>
      <Conversion></Conversion>
    </>
  );
}

export default App;
