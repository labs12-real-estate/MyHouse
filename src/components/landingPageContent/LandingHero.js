import React from 'react';
import AddressInput from '../inputs/AddressInput';
import housePng from '../../assets/images/isometric-house.png';

export default function LandingHero() {
  return (
    <div>
      <div className="hero">
        <h1>MyHouse</h1>
        <p>
          We have the most precise home valuation techniques in the industry.
          <br />
          Enter your Michigan address below to get started.
        </p>
        <AddressInput />
      </div>

      <div className="cloud_top">
        <img src={housePng} alt="isometric-house" />
      </div>
    </div>
  );
}
