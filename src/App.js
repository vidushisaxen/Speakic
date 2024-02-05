import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import NavSide from './components/NavSide';
import NavTop from './components/NavTop';
import Home from './components/Home';
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>

   </Routes>
   </>
  );
}

export default App;
