import React, { useState, useEffect } from "react";
import "../styles/navside.scss"; // Assuming SCSS is configured for React

function NavSide() {
  const [isClose, setIsClose] = useState(true);
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsClose(true);
      } else {
        setIsClose(false);
      }
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

  return (
    <nav
      className={`sidebar ${isClose && "close"}`}
      onMouseEnter={handleSidebarMouseEnter}
      onMouseLeave={handleSidebarMouseLeave}
    >
      <ul class="menu_items">
          <div class="menu_title menu_editor"></div>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bxs-magic-wand"></i>
              </span>
              <span class="navlink">Magic build</span>
            </a>
          </li>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-loader-circle"></i>
              </span>
              <span class="navlink">Filters</span>
            </a>
          </li>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-filter"></i>
              </span>
              <span class="navlink">Filter</span>
            </a>
          </li>
          <li class="item">
            <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-cloud-upload"></i>
              </span>
              <span class="navlink">Upload new</span>
            </a>
          </li>
        </ul>
      <div className="bottom_content">
        <div className="bottom expand_sidebar" onClick={handleSidebarToggle}>
          <span>Expand</span>
          <i className="bx bx-log-in"></i>
        </div>
        <div
          className="bottom collapse_sidebar"
          onClick={() => {
            setIsClose(true);
            setIsHoverable(true);
          }}
        >
          <span>Collapse</span>
          <i className="bx bx-log-out"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavSide;
