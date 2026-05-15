import React from 'react'
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Get to Know Us</h4>
            <a className="footer-link">Careers</a>
            <a className="footer-link">About Us</a>
            <a className="footer-link">Press Releases</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a className="footer-link">Facebook</a>
            <a className="footer-link">Twitter</a>
            <a className="footer-link">Instagram</a>
          </div>
          <div className="footer-col">
            <h4>Make Money with Us</h4>
            <a className="footer-link">Sell on Amazon</a>
            <a className="footer-link">Advertise Your Products</a>
            <a className="footer-link">Fulfilment by Amazon</a>
          </div>
          <div className="footer-col">
            <h4>Let Us Help You</h4>
            <a className="footer-link">Your Account</a>
            <a className="footer-link">Returns Centre</a>
            <a className="footer-link">Help</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">© {new Date().getFullYear()} Amazon_clone</div>
        <div className="footer-right">Made with ♥</div>
      </div>
    </footer>
  )
}

export default Footer
