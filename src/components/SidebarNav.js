import React from 'react'

import '../css/SidebarNav.css'

const SidebarNav = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">

        <input type="checkbox" />

        <span className='hamburger'></span>
        <span className='hamburger'></span>
        <span className='hamburger'></span>

        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default SidebarNav
