import React, { useState } from 'react';
import { commaSeparator } from '../../../helper-functions/display-functions';

import './MortgageCalculator.css';

import Chart from './Chart';
import calculate from './calculations';

export default () => {
  const [initial, setInitial] = useState('200000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('25');

  const { monthlyPayment, payments } = calculate(+initial, +years, +rate);

  return (
    <div>
      <div className="mortgage_calc_container">
        <div className="money">
          <h2>Monthly Payment</h2>
          <h3>{`${commaSeparator(monthlyPayment)}`}</h3>
        </div>

        <div className="col-sm-12">
          <Chart payments={payments} />
        </div>

        <div className="col-md-8 col-sm-12">
          <div className="col-sm-4">
            <div className="mortgage_calc_input_container">
              <label className="mortgage_calc_label">Initial Amount</label>
              <div className="mortgage_calc_input">
                <span>$</span>
                <input maxLength={7} value={initial} onChange={e => setInitial(e.target.value)} />
              </div>
            </div>
            <div className="mortgage_calc_input_container">
              <label className="mortgage_calc_label">Years</label>
              <input type="number" maxLength={2} value={years} onChange={e => setYears(e.target.value)} className="mortgage_calc_input" />
            </div>
            <div className="mortgage_calc_input_container">
              <label className="mortgage_calc_label">Rate</label>
              <div className="mortgage_calc_input">
                <span>%</span>
                <input type="number" step={0.1} value={rate} onChange={e => setRate(e.target.value)} className="mortgage_calc_input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
