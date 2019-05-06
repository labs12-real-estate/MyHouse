import React, { useState, useEffect } from 'react';
import Button from '../../components/buttons/Button';
import { commaSeparator } from '../../helper-functions/display-functions';

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
  }, []);
  return (
    <div className="wizard_form_initial_data">
      {step === 0 && (
        <div className="welcome">
          <div className="left_panel" />
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
              <p>Complete our quick survey for a more accurate valuation</p>
              <Button clickEvent={handleNext} buttonStyle="next_button" buttonText="Next" />
            </div>
          </div>
        </div>
      )}
      {step > 0 && step < 5 && (
        <div className="questions_answers">
          <div className="left_panel">{address}</div>
          <div className="right_panel">
            {valuation.high}
            {valuation.low}
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="confirmation">
          {address}
          {valuation.high}
          {valuation.low}
        </div>
      )}
    </div>
  );
}

export default WizardFormInitialData;
