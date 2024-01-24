import "../styles/navside.scss";
import React, { useRef, useState, useEffect } from 'react';

function NavSide() {
  const toggleMenuRef = useRef(null);
  const sideMenuRef = useRef(null);
  const contentRef = useRef(null);
  const barsRef = useRef([]);
  const [activeMenuItem, setActiveMenuItem] = useState('About');

  useEffect(() => {
    // Initial animation after 1 second
    setTimeout(() => {
      sideMenuRef.current.classList.add('resize');
      contentRef.current.classList.add('resize');
      toggleMenuRef.current.classList.add('active');
      barsRef.current.forEach(bar => bar.classList.add('anim-bar'));
    }, 1000);
  }, []);

  const handleToggleMenu = () => {
    sideMenuRef.current.classList.toggle('resize');
    contentRef.current.classList.toggle('resize');
    toggleMenuRef.current.classList.toggle('active');

    barsRef.current.forEach(bar => {
      bar.classList.add('anim-bar');
      setTimeout(() => {
        bar.classList.remove('anim-bar');
      }, 1000);
    });
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
    // Close the menu after item selection (optional)
    handleToggleMenu();
  };

  return (
    <div>
      <div className="nav-bar">
        <div
          id="menuToggle"
          className="toggle-menu active"
          ref={toggleMenuRef}
          onClick={handleToggleMenu}
        >
          <span class="bar" ref={(el) => barsRef.current.push(el)}></span>
          <span class="bar" ref={(el) => barsRef.current.push(el)}></span>
          <span class="bar" ref={(el) => barsRef.current.push(el)}></span>
        </div>
      </div>
      <div className="main">
        <div id="sideMenu" className="side-menu" ref={sideMenuRef}>
          <div className="menu-items">
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Home")}
            >
              Home
            </a>
            {/* ... Existing menu items ... */}
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Dashboard")}
            >
              Dashboard
            </a>
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Project")}
            >
              Project
            </a>
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Earning")}
            >
              Earning
            </a>
            <a href="#" className="item" onClick={() => handleMenuItemClick("Report")}>Report</a>
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Services")}
            >
              Services
            </a>
            {/* ... Existing menu items ... */}
            <a
              href="#"
              className="item active"
              onClick={() => handleMenuItemClick("About")}
            >
              About
            </a>
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Help")}
            >
              Help
            </a>
            <a
              href="#"
              className="item"
              onClick={() => handleMenuItemClick("Contact")}
            >
              Contact
            </a>
          </div>
        </div>
        </div>
    </div>
  );
}

export default NavSide;
