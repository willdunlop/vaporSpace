import React, { Component } from 'react';
import axios from 'axios';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      postMessage: '',
    }
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:3005/v1/announcement/add', {
      content: this.state.postMessage,
    })
      .then(response => console.log('Shit... it worked', response))
      .catch(error => console.log('Nothing', error));
  }

  onChange(postMessage) {
    this.setState({ postMessage })
  }

  render() {
    return (
      <div className="feed">
        <div className="feed__title">
          F E E D
        </div>
        <form
          className="feed__form"
          // onSubmit={e => this.onSubmit(e)}
          >
          <input
            className="feed__form-input"
            placeholder="Post"
            onChange={e => this.onChange(e.target.value)}
            value={this.state.postMessage}
          />
          <button className="feed__form-button">Post</button>
        </form>
        <div className="feed__content">
          <div className="feed__content-post">
            <div className="feed__content-post-banner">
              <p className="feed__content-post-name">>> ~AcquiredTaste:</p>
              <p className="feed__content-post-time">10:31pm</p>
            </div>
            <div className="feed__content-post-content">
              First ever post on VaporSpace and it's fake as fuck
            </div>
          </div>

          <div className="feed__content-post">
            <div className="feed__content-post-banner">
              <p className="feed__content-post-name">>> luxury suite:</p>
              <p className="feed__content-post-time">10:36pm</p>
            </div>
            <div className="feed__content-post-content">
              Hey guys, check me out my shit. Don't be derg.
            </div>
          </div>

        </div>
      </div>
    )
  }
}
