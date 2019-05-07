import React from 'react';
import Button from '../buttons/Button';
import { scrollToTop } from '../../helper-functions/onClick-logic';

export default function LandingBottomCTA() {
  return (
    <div>
      <section className="landing_cta_bottom">
        <div className="landing_house_bg" />
        <p>See your home's value</p>
        <Button buttonText="Get Started" buttonStyle="cta_btn_bottom" clickEvent={scrollToTop} />
      </section>
    </div>
  );
}
