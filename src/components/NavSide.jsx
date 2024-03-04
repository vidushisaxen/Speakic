import React, { useState, useEffect } from "react";
import "../styles/navside.scss"; // Assuming SCSS is configured for React
import logo from "../Assets/logo.jpg";
import {Link} from'react-router-dom';

function NavSide() {
  const [isClose, setIsClose] = useState(true);
  const [isHoverable, setIsHoverable] = useState(false);
  const [showExpandSidebar, setShowExpandSidebar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setIsClose(!isClose);
  };

  const handleSidebarMouseEnter = () => {
    if (isHoverable) {
      setIsClose(false);
    }
  };

  const handleSidebarMouseLeave = () => {
    if (isHoverable) {
      setIsClose(true);
    }
  };
const handleBottomContentClick = () => {
  setShowExpandSidebar(!showExpandSidebar); // Toggle bottom content visibility
};

  return (
    <nav
      className={`sidebar ${isClose && "close"}`}
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
    >
      <ul class="menu_items">
        <li className="item logo-item">
          <img
            src={logo}
            alt=""
            id="logo"
            className="rounded-full"
          />
          <Link to='/' className="nav_link"><div class="nav-title ml-5 nav-link">Speakic.</div></Link>
        </li>
      </ul>
      <ul class="menu_items">
        <li class="item">
        <Link to ='/' className="nav_link" >
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/wmwqvixz.json"
                trigger="hover"
                state="hover-home-1"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Home</span> 
            </Link>
          </li>
        <li class="item">
        <Link to='/profile' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Profile</span>
            </Link>
        </li>
      </ul>
      <ul class="menu_items">
        <li class="item">
        <Link to='/conversion' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/ayhtotha.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
           <span class="navlink">Conversion</span>
           </Link>
        </li>
        <li class="item">
        <Link to = '/translation' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/qnpnzlkk.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Translation</span>
            </Link>
        </li>
        <li class="item">
        <Link to='/' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/zyzoecaw.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Learning</span>
            </Link>
        </li>
      </ul>
      <ul class="menu_items">
        <li class="item">
        <Link to='/settings' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/ifsxxxte.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Settings</span>
            </Link>
        </li>
        <li class="item">
        <Link to ="/aboutus" className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/yxczfiyc.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
           <span class="navlink">About Us</span>
           </Link>
        </li>
        <li class="item">
        <Link to='/contactus' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/xtzvywzp.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Contact Us</span>
            </Link>
        </li>
        <li class="item">
        <Link to='/help' className="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/axteoudt.json"
                trigger="hover"
                state="hover-help-center-2"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Help</span>
            </Link>
        </li>
      </ul>
      <div className="bottom_content" onClick={handleBottomContentClick}>
        {showExpandSidebar && (
          <div
            className="bottom expand_sidebar"
            onClick={() => {
              setIsClose(false);
              setIsHoverable(false);
            }}
          >
            <span>Expand</span>
            <lord-icon
              src="https://cdn.lordicon.com/whtfgdfm.json"
              trigger="loop-on-hover"
              delay="2000"
              colors="primary:#ffedfa"
            ></lord-icon>
          </div>
        )}
        {!showExpandSidebar && (
          <div
            className="bottom collapse_sidebar"
            onClick={() => {
              setIsClose(true);
              setIsHoverable(true);
            }}
          >
            <span>Collapse</span>
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavSide;

