import React, { Component } from 'react';


export default class Navbar extends Component {


  render() {
    return (
      <div className="nav">
        <div className="container">
          <ul className="nav__links-wrapper">
            <li className="nav__vs-icon">
              VS
            </li>
            <li className="nav__profile-icon">
              P
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
    )
  }
}
