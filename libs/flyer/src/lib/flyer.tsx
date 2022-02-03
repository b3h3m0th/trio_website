import './flyer.scss';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable-next-line */
export interface FlyerProps {}

export const Flyer = (props: FlyerProps) => {
  return (
    <div className="flyer">
      <div className="flyer__header">
        <img
          src="assets/img/ahab_logo.png"
          className="flyer__header__ahab-logo"
          alt="ahab logo"
        />
        <span className="flyer__header__instagram">
          <FontAwesomeIcon icon={faInstagram} /> TRIO_SCHULFEST_2022
        </span>
      </div>
      <div className="flyer__content">
        <div className="flyer__content__schools">
          <p>HAK Bregenz</p>
          <p>BG Gallus</p>
          <p>HLW Marienberg</p>
        </div>
        <h1>TRIO</h1>
        <Tilt>
          <img
            src="assets/img/pipe.png"
            className="flyer__content__pipe"
            alt="pipe"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Flyer;
