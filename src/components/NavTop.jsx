import React from "react";
import "../styles/navtop.scss";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom"
const Navtop=()=>{
   return (
     <div class="nav">
       <input type="checkbox" id="nav-check" />
       <div class="nav-header">
         <img src={logo} alt="" id="logo" className="rounded-full" />
         <div class="nav-title ml-5">Speakic.</div>
       </div>
       <div class="nav-btn">
         <label for="nav-check">
           <span></span>
           <span></span>
           <span></span>
         </label>
       </div>

       <div class="nav-links">
       <Link to="/">Home</Link>
         {/* <a href="">home</a> */}
         <a href="">about us</a>
         <a href="">contact us</a>
         <a href="">help</a>
         <a href="">settings</a>
       </div>
     </div>
   );
}

export default Navtop;