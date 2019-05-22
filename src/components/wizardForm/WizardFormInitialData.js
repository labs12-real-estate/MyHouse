import React, { useState, useEffect } from 'react';
import Button from '../../components/buttons/Button';
import { commaSeparator } from '../../helper-functions/display-functions';
import { LazyImage } from 'react-lazy-images';
import welcome from '../../assets/images/welcome.jpg';
import lazyWelcome from '../../assets/images/welcome-lazy.jpg';
import wizardFormImg from '../../assets/images/wizard-form.jpg';
import lazyWizardFormImg from '../../assets/images/wizard-form-lazy.jpg';

function WizardFormInitialData({ step, handleNext }) {
  const [address, setAddress] = useState('');
  const [valuation, setValuation] = useState({ high: 0, low: 0 });

  const [street, ...rest] = address.split(', ');
  const restAddress = rest.join(', ');

  useEffect(() => {
    const { data: initialData } = JSON.parse(localStorage.getItem('initialData'));

    if (initialData) {
      setAddress(initialData.address);
      setValuation({ high: initialData.high, low: initialData.low });
    }
    // This is used to track if it's the users first time entering the Overview Page.
    localStorage.setItem('registering', 'yes');
  }, []);
  return (
    <div className="wizard_form_initial_data">
      {step === 0 && (
        <div className="welcome">
          <LazyImage
            src={welcome}
            alt="home feature"
            placeholder={({ imageProps, ref }) => <img className="left_panel" ref={ref} src={lazyWelcome} alt="placeholder" />}
            actual={({ imageProps }) => <img className="left_panel" src={welcome} alt="welcome" />}
          />
          <div className="left_panel_text">
            <h1>Welcome</h1>
            <h2>MyHouse</h2>
          </div>
          <div className="right_panel">
            <div className="address_container">
              <h4>Address entered</h4>
              <h2>
                <i className="fas fa-map-marker-alt" />
                <span> </span>
                {street}
              </h2>
              <h3>{restAddress}</h3>
            </div>
            <div className="initial_value_range">
              <h4>Initial value range</h4>
              <div className="container">
                <div>
                  <h3>LOW</h3>
                  <div className="low">
                    <i className="fas fa-square orange" /> {commaSeparator(Math.round(valuation.low))}
                  </div>
                </div>
                <div>
                  <h3>HIGH</h3>
                  <div className="high">
                    <i className="fas fa-square green" /> {commaSeparator(Math.round(valuation.high))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom_container">
              <p>In order to get a more accurate valuation, just answer a few questions.</p>
              <p>Click next to get started.</p>
            </div>
            <div className="button_container">
              <Button clickEvent={handleNext} buttonStyle="register_button" buttonText="Next" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      )}
      {step > 0 && step < 5 && (
        <div className="questions_answers">
          <LazyImage
            src={welcome}
            alt="home feature"
            placeholder={({ imageProps, ref }) => <img className="left_panel" ref={ref} src={lazyWizardFormImg} alt="placeholder" />}
            actual={({ imageProps }) => <img className="left_panel" src={wizardFormImg} alt="welcome" />}
          />
          <div className="left_panel_text">
            <h4>MyHouse</h4>
          </div>
          <div className="right_panel">
            <div className="initial_value_range">
              <div className="logo_address">
                <i className="fas fa-map-marker-alt" />
                <div className="2_lines_address">
                  <h2>{street}</h2>
                  <h3>{restAddress}</h3>
                </div>
              </div>
              <div className="container">
                <div>
                  <h3>LOW</h3>
                  <div className="low">
                    <i className="fas fa-square orange" /> {commaSeparator(Math.round(valuation.low))}
                  </div>
                </div>
                <div>
                  <h3>HIGH</h3>
                  <div className="high">
                    <i className="fas fa-square green" /> {commaSeparator(Math.round(valuation.high))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="questions_answers">
          <LazyImage
            src={welcome}
            alt="home feature"
            placeholder={({ imageProps, ref }) => <img className="left_panel" ref={ref} src={lazyWizardFormImg} alt="placeholder" />}
            actual={({ imageProps }) => <img className="left_panel" src={wizardFormImg} alt="welcome" />}
          />
          <div className="left_panel_text">
            <h4>MyHouse</h4>
          </div>

          <div className="right_panel">
            <div className="initial_value_range">
              <div className="logo_address">
                <i className="fas fa-map-marker-alt" />
                <div className="lines_address">
                  <h2>{street}</h2>
                  <h3>{restAddress}</h3>
                </div>
              </div>

              <div className="container">
                <div>
                  <h3>LOW</h3>
                  <div className="low">
                    <i className="fas fa-square orange" /> {commaSeparator(Math.round(valuation.low))}
                  </div>
                </div>
                <div>
                  <h3>HIGH</h3>
                  <div className="high">
                    <i className="fas fa-square green" /> {commaSeparator(Math.round(valuation.high))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WizardFormInitialData;
