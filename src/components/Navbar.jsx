import React from 'react'
import './css/Navbar.css'

import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setCategory, setSearch }) => {
  const navigate = useNavigate()

  const handleChane = (e) =>{
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSearch(selectedCategory !== 'all');
  }
  return (
    <>
      <div className="navbar">
        <div className="left">
            <div className="logo-section" role="button" tabIndex={0} onClick={() => navigate('/')} onKeyDown={() => navigate('/')}>
                <img src="https://assets.aboutamazon.com/59/21/d658597b447d97f8bc9aef3362e0/logo-inverse-1.svg" alt="logo" />
                <span>.in</span>
            </div>
            <div className="location-section">
                <IoLocationOutline size={20} />
                <div>
                  <div className="location-label">Deliver to</div>
                  <div className="location-text">Location</div>
                </div>
            </div>
        </div>
        
        <div className="center">
            <div className="inputbox">
                <select onChange={handleChane} name="category" id="category">
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="books">Books</option>
                    <option value="clothing">Clothing</option>
                </select>
                <input type="text" name="search" id="search" placeholder='Search Amazon.in' />
                <button className="search-btn">
                  <IoSearchSharp size={20} />
                </button>
            </div>
        </div>

        <div className="right">
            <div className="language-section">
                <span>EN</span>
            </div>
            <div className="account-section">
              <div className="account-text">
                <div className="hello">Hello, User</div>
                <div className="account">Account & Lists</div>
              </div>
            </div>
            <div className="returns-section">
              <div className="returns-text">
                <div className="returns-label">Returns</div>
                <div className="orders">& Orders</div>
              </div>
            </div>
            <div className="cart-section">
              <div className="cart-icon-wrapper">
                <PiShoppingCartSimpleBold size={32} />
                <span className="cart-count">1</span>
              </div>
              <span className="cart-text">Cart</span>
            </div>
        </div>
      </div>
        <div style={{ height: '64px' }} aria-hidden="true" />
      <div className='bottom_navbar'>
        <ul className='bottom_navbar_list'>
          <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a></li>
          <li><a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about') }}>About</a></li>
          <li><a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact') }}>Contact</a></li>
          <li><a href="/services" onClick={(e) => { e.preventDefault(); navigate('/services') }}>Services</a></li>
          <li><a href="/login" onClick={(e) => { e.preventDefault(); navigate('/login') }}>Login / Register</a></li>
          </ul>
      </div>
    </>
  )
}

export default Navbar
