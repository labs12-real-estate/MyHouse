import React, { useState, useEffect } from 'react';
import Button from '../../components/buttons/Button';

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
          <div className="left_panel">
            <h1>Welcome</h1>
            <h2>MyHouse</h2>
          </div>
          <div className="right_panel">
            <div className="address_container">
              <h4>Address entered</h4>
              <h2>
                <i className="fas fa-map-marker-alt" />
                {street}
              </h2>
              <h3>{restAddress}</h3>
            </div>
            <div className="initial_value_range">
              <h4>Initial value range</h4>
              <div>
                <i className="fas fa-square" /> {valuation.low}
              </div>
              <div>
                <i className="fas fa-square" /> {valuation.high}
              </div>
            </div>
            <div className="bottom_container">
              <p>Complete our quick survey for a more accurate valuation</p>
              <Button clickEvent={handleNext} buttonStyle="" buttonText="Next" />
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
