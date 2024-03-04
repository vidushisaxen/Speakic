import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import "../styles/conversion.scss";
import text1 from "../Assets/text1.png";
import text2 from "../Assets/text2.jpg";
import speech2 from "../Assets/speech2.jpg";
import speech3 from "../Assets/speech3.png";
import NavSide from "./NavSide";
const Conversion=()=>{
    return (
      <>
        <NavSide></NavSide>
        <div className="conversion-body grid grid-cols-2 gap-4 md:grid-cols-1 ">
          {/* <a href="#" alt="to speech" target="_blank"> */}
          <div class="conversion-card">
            <div class="conversion-wrapper">
              <img src={speech2} class="conversion-cover-image" />
            </div>
            <Link to="/tospeech">
              <h2 className="conversion-title">SPEECH</h2>
            </Link>
            <img src={speech3} class="conversion-character" />
          </div>
          {/* </a> */}

          {/* <a href="#" alt="To Text" target="_blank"> */}
          <div class="conversion-card">
            <div class="conversion-wrapper">
              <img src={text2} class="conversion-cover-image" />
            </div>
            <h2 className="conversion-title">TEXT</h2>
            <img src={text1} class="conversion-character" id="text" />
          </div>
          {/* </a> */}
        </div>
      </>
    );
}

export default Conversion;