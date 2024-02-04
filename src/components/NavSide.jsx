import React, { useState, useEffect } from "react";
import "../styles/navside.scss"; // Assuming SCSS is configured for React

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
        <li class="item">
          <a href="#" class="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/ayhtotha.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Conversion</span>
          </a>
        </li>
        <li class="item">
          <a href="#" class="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/qnpnzlkk.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Translation</span>
          </a>
        </li>
        <li class="item">
          <a href="#" class="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/wmwqvixz.json"
                trigger="hover"
                state="hover-home-1"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Home</span>
          </a>
        </li>
        <li class="item">
          <a href="#" class="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/omiqopzf.json"
                trigger="morph"
                state="morph-book"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Learning</span>
          </a>
        </li>
        <li class="item">
          <a href="#" class="nav_link">
            <span class="navlink_icon">
              <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="hover"
                colors="primary:#ffedfa"
              ></lord-icon>
            </span>
            <span class="navlink">Profile</span>
          </a>
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
              trigger="hover"
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
                src="https://cdn.lordicon.com/zxvuvcnc.json"
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
