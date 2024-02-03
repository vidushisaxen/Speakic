import React from 'react'
import '../styles/header.css'


const Header = () => {
  return (
    <>
    <div className='header'>
      <img src='https://logowik.com/content/uploads/images/panda3013.logowik.com.webp' className='header-image'></img>
      <h2 className='header-heading'>Speakic</h2>
      <ul className='header-list'>
        <li>About</li>
        <li>Settings</li>
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
    </div>
    </>
  )
}

export default Header