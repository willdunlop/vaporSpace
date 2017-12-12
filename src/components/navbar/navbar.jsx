import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <div className="container">
      <ul className="nav__links-wrapper">
        <li className="nav__icon nav__icon--home">
          <NavLink to="/">
            <img src="src/assets/images/vs-logo.png" />
          </NavLink>
        </li>
        <li className="nav__icon">
          <img src="src/assets/icons/space.png" />
        </li>
        <li className="nav__icon">
          <img src="src/assets/icons/inbox.png" />
        </li>
        <li className="nav__icon">
          <img src="src/assets/icons/search.png" />
        </li>

        <li className="nav__icon nav__icon--account">
          <img src="src/assets/icons/account.png" />
        </li>
      </ul>
    </div>
  </div>
);


export default Navbar;
