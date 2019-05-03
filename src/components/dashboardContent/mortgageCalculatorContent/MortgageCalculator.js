import React, { useState } from 'react';

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
      <div className="container-fluid">
        <div className="col-md-8 col-sm-12">
          <div className="col-sm-4">
            <div>
              <h2>Initial</h2>
              <label>Amount</label>
              <input maxLength={7} value={initial} onChange={e => setInitial(e.target.value)} />
            </div>
            <div>
              <label>Years</label>
              <input type="number" maxLength={2} value={years} onChange={e => setYears(e.target.value)} />
            </div>
            <div>
              <label>Rate</label>
              <input type="number" step={0.1} value={rate} onChange={e => setRate(e.target.value)} />
            </div>
          </div>

          <div className="col-sm-12">
            <h2>
              Monthly Payment
              <span className="money">{monthlyPayment.toFixed(2)}</span>
            </h2>
            <Chart payments={payments} />
          </div>
        </div>
      </div>
    </div>
  );
};
