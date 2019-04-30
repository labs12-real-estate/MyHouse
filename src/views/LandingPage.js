import React from 'react';
import LandingTopBar from '../components/navigation/LandingTopBar';
import housePng from '../assets/images/isometric-house.png';
import macBook from '../assets/images/macbook.png';
import laptop from '../assets/icons/laptop.svg';
import statistics from '../assets/icons/statistics.svg';
import calculator from '../assets/icons/calculator.svg';
import AddressInput from '../components/inputs/AddressInput';
import MarketingCard from '../components/cards/MarketingCard';
import Button from '../components/buttons/Button';
import Footer from '../components/footer/Footer';
import ReviewCard from '../components/cards/ReviewCard';

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

      <section className="landing_mid_grey">
        <h2>Why MyHouse?</h2>
        <div className="marketing_cards">
          <MarketingCard
            icon={laptop}
            title="Customized"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MarketingCard
            icon={calculator}
            title="Transparent"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <MarketingCard
            icon={statistics}
            title="Simple"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>

      <section className="landing_mid">
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="review_cards">
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
            <ReviewCard
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              author="Lorem Ipsum"
            />
          </div>
        </div>
      </section>

      <section className="landing_cta_bottom">
        <p>See your home's value</p>
        <Button buttonText="Get Started" buttonStyle="cta_btn_bottom" />
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
