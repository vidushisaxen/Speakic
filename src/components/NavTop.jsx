import React from "react";
import "../styles/style.scss"

const Navtop=()=>{
   return (
     <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            Speakic.
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a href="">home</a>
          <a href="">about us</a>
          <a href="">contact us</a>
          <a href="">help</a>
          <a href="">settings</a>
        </div>
      </div>
   );
}

export default Navtop;