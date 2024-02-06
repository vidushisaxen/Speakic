import React from 'react';
import '../styles/maincontent.scss';
import '../js/card';
import translator from '../Assets/Translator-Process.png';
import conversion from '../Assets/conversion.jpg';
import learning from '../Assets/learning.jpg';
import {Link} from 'react-router-dom';

const MainContent = () => {
  return (
   <>
   <div className="main-content">
   <div class="container">
  <div class="front">Learning</div>
  <div class="back"><img src={learning}/></div>
</div>
<div class="container">
    <Link to = '/translation'> <div class="front">Translation</div></Link>
 
  <div class="back"><img src={translator}/></div>
</div>
<div class="container">
  <div class="front">Conversion</div>
  <div class="back"><img src ={conversion}/></div>
</div>
</div>

   </>
  )
}

export default MainContent