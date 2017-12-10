import React from 'react';

const logo = require('../../assets/icons/logo.svg');

const Navbar = () => (
  <div className="nav">
    <div className="container">
      <ul className="nav__links-wrapper">
        <li className="nav__vs-item">
          <a className="nav__home" href="#">
            <img src="src/assets/images/vs-logo.png" />
            {/* {logo} */}
          </a>
        </li>
        <li className="nav__profile-icon">
          <a className="nav__space" href="#">

          </a>
        </li>
        <li className="nav__wave-icon">
          W
        </li>
        <li className="nav__search-icon">
          S
        </li>

        <li className="nav__user-icon">
          U
        </li>
      </ul>
    </div>
  </div>
);


export default Navbar;
