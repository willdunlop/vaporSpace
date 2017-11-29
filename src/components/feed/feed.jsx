import React, { Component } from 'react';

export default class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <div className="feed__title">
          FEED
        </div>
        <div className="feed__content">
          <div className="feed__content-post">
            <div className="feed__content-post-banner">
              <p className="feed__content-post-name">>> ~AcquiredTaste:</p>
              <p className="feed__content-post-time">10:31pm 28/11/2017</p>
            </div>
            <div className="feed__content-post-content">
              First ever post on VaporSpace and it's fake as fuck
            </div>
          </div>

          <div className="feed__content-post">
            <div className="feed__content-post-banner">
              <p className="feed__content-post-name">>> luxury suite:</p>
              <p className="feed__content-post-time">10:36pm 28/11/2017</p>
            </div>
            <div className="feed__content-post-content">
              Hey guys, check me out my shit. Don't be derg.
            </div>
          </div>

        </div>
      </div>
    );
  }
}
