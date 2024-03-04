import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/conversion.scss";
import text1 from "../Assets/text1.png";
import text2 from "../Assets/text2.jpg";
import speech2 from "../Assets/speech2.jpg";
import speech3 from "../Assets/speech3.png";

const Conversion=()=>{
    return (
      <div className="body grid grid-cols-2 gap-4 md:grid-cols-1 ">
        <a href="#" alt="to speech" target="_blank">
          <div class="card">
            <div class="wrapper">
              <img src={speech2} class="cover-image" />
            </div>
            <h2 className="title">SPEECH</h2>
            <img src={speech3} class="character" />
          </div>
        </a>

        <a href="#" alt="To Text" target="_blank">
          <div class="card">
            <div class="wrapper">
              <img src={text2} class="cover-image" />
            </div>
            <h2 className="title">TEXT</h2>
            <img src={text1} class="character" id="text" />
          </div>
        </a>
      </div>
    );
}

export default Conversion;