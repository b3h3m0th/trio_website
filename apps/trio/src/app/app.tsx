import React from 'react';
import Tilt from 'react-parallax-tilt';
import './app.scss';

import pipe from '../assets/img/pipe.png';

export const App = () => {
  return (
    <div className="app">
      <Tilt>
        <img src={pipe} alt="neon pipe" />
      </Tilt>
    </div>
  );
};

export default App;
