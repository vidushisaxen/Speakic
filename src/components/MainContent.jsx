import React from 'react';
import '../styles/maincontent.scss';
import '../js/card';
import translator1 from '../Assets/Translator-Process.png';
import translator3 from "../Assets/translate3.png";
import conversion1 from '../Assets/conversion1.png';
import conversion3 from "../Assets/conversion3.png";
import learning1 from '../Assets/learning1.png';
import learning3 from "../Assets/learning3.png";

import {Link} from 'react-router-dom';

const MainContent = () => {
  return (
    <>
      <div className="main-content-body grid grid-cols-2 gap-4 md:grid-cols-1 ">
        {/* <a href="#" alt="To Text" target="_blank"> */}
          <div class="main-content-card">
            <div class="main-content-wrapper">
              <img src={learning1} class="main-content-cover-image" />
            </div>
            <h2 className="main-content-title">LEARNING</h2>
            <img src={learning3} class="main-content-character" id="text" />
          </div>
        {/* </a> */}
        {/* <a href="#" alt="To Text" target="_blank"> */}
          <div class="main-content-card">
            <div class="main-content-wrapper">
              <img src={translator1} class="main-content-cover-image" />
            </div>
            <Link to='/translation'><h2 className="main-content-title">TRANSLATE</h2></Link>
            <img src={translator3} class="main-content-character" id="text" />
          </div>
        {/* </a> */}
        {/* <a href="#" alt="To Text" target="_blank"> */}
          <div class="main-content-card">
            <div class="main-content-wrapper">
              <img src={conversion1} class="main-content-cover-image" />
            </div>
            <Link to='/conversion'><h2 className="main-content-title">CONVERT</h2></Link>
            <img src={conversion3} class="main-content-character" id="text" />
          </div>
        {/* </a> */}
      </div>
    </>
  );
}

export default MainContent