import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import NavSide from './components/NavSide';
import Home from './components/Home';
import Translation from './components/Translation';
import TextToSpeech from './components/TextToSpeech';
import Conversion from './components/Conversion';
import Contactus from './components/Contactus';
import Profile from './components/Profile';
import Settings from './components/Settings';
import InformationPage from './components/InformationPage';
import Help from './components/Help';
import ToSpeech from './components/ToSpeech';


function App() {

  return (
   <>
   <Routes>
    <Route path ='/' element ={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path ='/translation' element ={<Translation/> }/>
    <Route path ='/conversion' element ={ <Conversion/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/aboutus' element={<InformationPage/>}/>
    <Route path='/help' element={<Help/>}/>
    <Route path='/tospeech' element ={<ToSpeech/>}/>
   </Routes>
   </>
  );
}

export default App;
