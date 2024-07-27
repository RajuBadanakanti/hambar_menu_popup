// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-button"
            data-testid="hamburgerIconButton"
          >
            ...
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              ...
              <IoMdClose size="35" color="#616e7c" />
            </button>
            <ul className="bar-link-ul-container">
              <li className="link-li-items">
                <Link to="/" className="link-items" onClick={() => close()}>
                  <AiFillHome className="bar-home-icon" />
                  <p className="bar-text">Home</p>
                </Link>
              </li>

              <li className="link-li-items">
                <Link
                  to="/about"
                  className="link-items"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill className="bar-about-icon" />
                  <p className="bar-text">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
    <hr />
  </>
)

export default Header
