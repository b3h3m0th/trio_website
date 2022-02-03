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
        <h1 className="flyer__content__title__front">TRI</h1>
        <Tilt className="flyer__content__pipe" trackOnWindow scale={1.1}>
          <img
            src="assets/img/pipe.png"
            alt="pipe"
            className="flyer__content__pipe__img"
          />
        </Tilt>
        <h1 className="flyer__content__title__back">TRIO</h1>
        <div className="flyer__content__info">
          <h2 className="flyer__content__info__subtitle">
            Alle Guten Dinge <br /> sind drei
          </h2>
          <div className="flyer__content__info__date">
            <span className="flyer__content__info__date__day">23</span>
            <div className="flyer__content__info__date__data">
              <div className="flyer__content__info__date__data__month">
                April
              </div>
              <div className="flyer__content__info__date__data__location">
                Altes Hallenbad
              </div>
            </div>
          </div>
          <div className="flyer__content__info__data">
            Einlass 20:00 | 16+
            <br />
            VVK 12€ | Abendkasse 15€
            <br />
            spark7 Ermäßigung -2€
          </div>
          <div className="flyer__content__info__dj">
            <img src="assets/img/avo.png" alt="AVO" />
            <img src="assets/img/datjay.png" alt="Datjay" />
            <img src="assets/img/dj_spicy.png" alt="DJ Spicy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
