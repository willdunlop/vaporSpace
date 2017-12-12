import React from 'react';

import Feed from './feed/feed';
import MusicPlayer from './music-player';
import TopSpaces from './top-spaces';


const Home = () => (
  <div className="container">
    <div className="app__logo-container">
      <img alt="Home" src="src/assets/images/vs-title.png" />
    </div>
    <hr />
    <p className="app__text">
      A place for one to express their artistic predilection and its philosophy
    </p>
    <div className="app__components-wrapper">
      <div className="app_components-left">
        <Feed />
      </div>
      <div className="app_components-right">
        <MusicPlayer />
        <TopSpaces />
      </div>
    </div>
  </div>
);

export default Home;
