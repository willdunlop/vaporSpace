import React from 'react';

const TopSpaces = () => (
  <div className="ranked-spaces">
    <h2 className="ranked-spaces__title">
      S p a c e s
    </h2>

    <div className="ranked-spaces__section">
      <p className="ranked-spaces__sub-title">Top</p>
      <hr />
      <div className="ranked-spaces__top">
        <div className="ranked-spaces__pillars">
          <img src="src/assets/images/Pillars.png" />
        </div>
        <ol className="ranked-spaces__top-list">
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>

          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>
          <li><a href="#">~AcquiredTaste</a></li>

        </ol>
        <div className="ranked-spaces__pillars ranked-spaces__pillars--right">
          <img src="src/assets/images/Pillars.png" />
        </div>
      </div>
      <hr />
    </div>


    <div className="ranked-spaces__section">
      <p className="ranked-spaces__sub-title">Random</p>
      <ul className="ranked-spaces__random">
        <li className="ranked-spaces__random-item">

        </li>
      </ul>
    </div>

  </div>
)

export default TopSpaces;
