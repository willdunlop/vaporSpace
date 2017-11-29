import React, { Component } from 'react';

// NOTE: if you dont use this, remove it
// import Sound from 'react-sound';

export default class MusicPlayer extends Component {
  render() {
    return (
      <div className="music-player">
        <div className="music-player__wrapper">
          <div className="music-player__title">
            Music Player
          </div>
        </div>
      </div>
    );
  }
}
