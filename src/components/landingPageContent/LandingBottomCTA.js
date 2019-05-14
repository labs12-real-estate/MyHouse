import React from 'react';
import Button from '../buttons/Button';
import { animateScroll as scroll } from 'react-scroll';

export default function LandingBottomCTA() {
  return (
    <div>
      <section className="landing_cta_bottom">
        <div className="landing_house_bg" />
        <p>See your home's value</p>
        <Button buttonText="Get Started" buttonStyle="cta_btn_bottom" clickEvent={() => scroll.scrollToTop({ smooth: 'easeInOutCubic', duration: 1500 })} />
      </section>
    </div>
  );
}
