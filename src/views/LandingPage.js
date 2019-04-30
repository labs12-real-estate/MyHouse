import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';
import housePng from '../assets/images/isometric-house.png';
import macBook from '../assets/images/macbook.png';
import AddressInput from '../components/inputs/AddressInput';
import Footer from '../components/footer/Footer';

function LandingPage() {
  return (
    <div className="landing_body">
      <LandingTopBar />

      <div className="hero">
        <h1>MyHouse</h1>
        <p>
          We have the most precise home
          <br /> valuation techniques in the industry
        </p>
        <AddressInput />
      </div>

      <div className="cloud_top">
        <img src={housePng} alt="isometric-house" />
      </div>

      <section className="landing_mid">
        <h2>Skip the Middleman</h2>
        <p>
          Coupled with the best machine learning algorithms in real estate technology, MyHouse’s data provides homeowners and buyers the most accurate decision
          making information on the market
        </p>
      </section>

      <section className="macbook">
        <img src={macBook} alt="macbook with demo" />
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
