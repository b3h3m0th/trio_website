import React from 'react';
import Tilt from 'react-parallax-tilt';
import './app.module.scss';

import pipe from '../assets/img/pipe.png';

export const App = () => {
  return (
    <div>
      <Tilt>
        <img src={pipe} alt="neon pipe" />
      </Tilt>
    </div>
  );
};

export default App;
