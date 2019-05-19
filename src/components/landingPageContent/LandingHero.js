import React from 'react';
import AddressInput from '../inputs/AddressInput';
import housePng from '../../assets/images/isometric-house.png';
import { useWindowWidth } from '../../helper-functions/display-functions';

export default function LandingHero() {
  return (
    <div>
      <div className="hero">
        <h1>{useWindowWidth() <= 600 ? 'MyHouse' : 'Discover your value'}</h1>

        <p>We have the most precise home valuation techniques in the industry.</p>
        <p>Enter your address below to get started.</p>
        <AddressInput />
      </div>

      <div className="cloud_top">
        <img src={housePng} alt="isometric-house" />
      </div>
    </div>
  );
}
