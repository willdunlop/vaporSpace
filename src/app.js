import React, { Component } from 'react';
import '../styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <h1 className="app__title">VaporSpace</h1>
          <p className="app__text">
            A place for one to express their artistic predilection and it's philosophy
          </p>
        </div>
      </div>
    );
  }
}
