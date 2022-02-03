import './flyer.scss';
import Tilt from 'react-parallax-tilt';

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
      </div>
      <div className="flyer__content">
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
