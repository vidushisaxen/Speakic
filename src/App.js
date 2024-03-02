import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';
import NavSide from './components/NavSide';
import Home from './components/Home';
import Translation from './components/Translation';
import TextToSpeech from './components/TextToSpeech';
function App() {
  const text =
      "Text-to-speech feature is now available on relatively any website or blog. It's a game changer that you can listen to the content instead of reading it. Especially effective for people with visual or cognitive impairments or on the go. I came up with the idea to implement it for my blog, so this is how I started researching this topic which ended up being a tutorial for you. So in this tutorial, we will go through the process of building a text-to-speech component in React. We will use the `Web Speech API` to implement the text-to-speech functionality.";

  return (
   <>
   <Routes>
    <Route path ='/' element ={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path ='/translation' element ={<Translation/> }/>
    
   </Routes>
   {/* <TextToSpeech></TextToSpeech> */}
   </>
  );
}

export default App;
