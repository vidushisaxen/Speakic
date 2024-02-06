import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import NavSide from './components/NavSide';
import Home from './components/Home';
import Translation from './components/Translation';
function App() {
  return (
   <>
   <Routes>
    <Route path ='/' element ={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path ='/translation' element ={<Translation/> }/>

   </Routes>
   </>
  );
}

export default App;
