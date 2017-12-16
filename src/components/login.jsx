import React, { Component } from 'react';

export default class Login extends Component {

  render() {
    return (
      <div className="container">
        <div className="login__logo-container">
          <img alt="Home" src="src/assets/images/vs-title.png" />
        </div>
        <hr />

        <div className="login__top">
          <div className="login__pillars">
            <img src="src/assets/images/Pillars.png" />
          </div>
          <div className="login__options">
            <button className="button login__button">Login</button>
            <button className="button login__button">Sign-Up</button>
          </div>
          <div className="login__pillars login__pillars--right">
            <img src="src/assets/images/Pillars.png" />
          </div>
        </div>
      <hr />
      </div>

    )
  }
}
