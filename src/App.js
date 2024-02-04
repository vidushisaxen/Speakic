import './App.css';
import React from 'react';
import Login from './components/login.jsx';
import Navtop from './components/NavTop';
import NavSide from './components/NavSide';
function App() {
  return (
   <>
   <Navtop/>
   <NavSide></NavSide>
   {/* <Login></Login> */}
   </>
  );
}

export default App;
