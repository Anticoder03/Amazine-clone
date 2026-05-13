import React from 'react'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="left">
            <span>
                <img src="public\img\logo.png"   alt="logo" />
            </span>
        </div>
        <div className="center"></div>
        <div className="right"></div>

      </div>
    </>
  )
}

export default Navbar
