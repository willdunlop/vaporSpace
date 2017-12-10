import React from 'react';
import { string } from 'prop-types';

const Pillars = ({ side }) => (
  <div className={`app__bg-pillar app__bg-pillar--${side}`}>
    <div className="app__bg-pillar-edge">
      <img alt="" src="src/assets/images/pillars-top.png" />
    </div>
    <div className="app__bg-pillar-mid">
      <img alt="" src="src/assets/images/pillars-mid.png" />
    </div>
    <div className="app__bg-pillar-edge">
      <img alt="" src="src/assets/images/pillars-bottom.png" />
    </div>
  </div>
);

Pillars.propTypes = {
  side: string.isRequired,
}

export default Pillars;
