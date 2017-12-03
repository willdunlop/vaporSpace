import React, { Component } from 'react';
import axios from 'axios';

// NOTE: if you dont use this, remove it
// import Sound from 'react-sound';

export default class MusicPlayer extends Component {
  constructor() {
    super();

    this.state = {
      announcement: '',
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3005/v1/announcement')
      .then(response => console.log('It worked', response))
      .catch(error => console.log('get Error', error));
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:3005/v1/announcement/add', {
      content: this.state.announcement,
    })
      .then(response => console.log('Shit... it worked', response))
      .catch(error => console.log('Nothing', error));
  }

  onChange(value) {
    this.setState({ announcement: value });
  }

  render() {
    return (
      <div className="music-player">
        <div className="music-player__wrapper">
          <div className="music-player__title">
            Music Player
          </div>
        </div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="text"
            placeholder="type shit"
            value={this.state.announcement}
            onChange={e => this.onChange(e.target.value)}
          />
          <input type="submit" />
        </form>
        <br />
        <div>Input Value: {this.state.announcement}</div>
        <br />
        <div>EACH ANNOUNCEMENT IN THE DEEBS:</div>
      </div>
    );
  }
}
