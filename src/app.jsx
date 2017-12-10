import React from 'react';

import Navbar from './components/navbar/navbar';
import Feed from './components/feed/feed';
import MusicPlayer from './components/music-player';
import './main.scss';


const App = () => (
  <div className="app">
    <Navbar />
    <div className="container app__container">
      {/* <h1 className="app__title">VaporSpace</h1> */}
      <div className="app__logo-container">
        <img alt="Home" src="src/assets/images/vs-title.png" />
      </div>
      <hr />
      <p className="app__text">
        A place for one to express their artistic predilection and its philosophy
      </p>
    </div>

    <div className="container">
      <div className="app__components-wrapper">
        <div className="app_components-left">
          <Feed />
        </div>
        <div className="app_components-right">
          <MusicPlayer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
