import React, { useState, useEffect } from 'react';
import { STATUS } from 'react-joyride';
import macBook from '../assets/images/macbook.png';

export const steps = [
  {
    target: 'body',
    placement: 'center',
    content: (
      <div className="step_container">
        <h1>
          Welcome to your <span>MyHouse</span> dashboard. <br />
          <img src={macBook} alt="computer" />
          If you'll give us a moment, we'd like to show you around.
        </h1>
      </div>
    ),
    locale: { skip: 'Click to skip guide.' },
    title: <h2 className="step_title">Hello!</h2>,
    disableBeacon: true
  },
  {
    target: '#overview',
    content: (
      <div className="step_container">
        <h1>
          You're currently on the Overview Page.
          <br /> Here you can get at-a-glance information about your house based on data we've collected.
        </h1>
      </div>
    ),
    title: <h2 className="step_title">Overview</h2>,
    placement: 'right',
    locale: { skip: 'Click to skip guide.' },
    disableBeacon: true
  },
  {
    target: '#myhouse',
    content: (
      <div className="step_container">
        <h1>
          The <span>MyHouse</span> Profile page is where you can customize details about your home including your home's story, recent upgrades and updates to
          parcel data.
        </h1>
      </div>
    ),
    title: <h2 className="step_title">MyHouse Profile</h2>,
    placement: 'right',
    locale: { skip: 'Click to skip guide.' },
    disableBeacon: true
  },
  {
    target: '#valuationPlayground',
    content: (
      <div className="step_container">
        <h1>Use the Valuation Playground to see how various types of upgrades might increase your home's value.</h1>
      </div>
    ),
    title: <h2 className="step_title">Valuation Playground</h2>,
    placement: 'right',
    locale: { skip: 'Click to skip guide.' },
    disableBeacon: true
  },
  {
    target: '#mortgageCalculator',
    content: (
      <div className="step_container">
        <h1>The Mortgage Calculator is a simple but powerful tool. Use it to calculate your mortgage payments based on input you provide.</h1>
      </div>
    ),
    title: <h2 className="step_title">Mortgage Calculator</h2>,
    placement: 'right',
    locale: { skip: 'Click to skip guide.' },
    disableBeacon: true
  },
  {
    target: '#designStudio',
    content: (
      <div className="step_container">
        <h1>
          The Design Studio is wonderful!
          <br /> On this page you can find an endless supply of beauty and inspiration from decor to bathroom tiles.
        </h1>
      </div>
    ),
    title: <h2 className="step_title">Design Studio</h2>,
    placement: 'right',
    locale: { skip: 'Click to skip guide.' },
    disableBeacon: true
  },
  {
    target: '#settings',
    content: (
      <div className="step_container">
        <h1>The settings page is utilitarian, but head over here if you ever need to change some of your basic account information.</h1>
      </div>
    ),
    title: <h2 className="step_title">Settings</h2>,
    placement: 'right',
    locale: { skip: 'Click to skip guide.' },
    disableBeacon: true
  },
  {
    target: 'body',
    content: (
      <div className="step_container">
        <h1>
          That's all you need to know! <br /> Please enjoy <span>MyHouse</span>.
        </h1>
      </div>
    ),
    title: <h2 className="step_title">Farewell</h2>,
    placement: 'center',
    disableBeacon: true,
    locale: { last: 'Done' }
  }
];

export const useSteps = steps => {
  const [run, setRun] = useState(false);
  const [step] = useState(steps);

  useEffect(() => {
    if (window.innerWidth >= 1200 && localStorage.getItem('registering')) {
      setRun(true);
    }
  }, []);

  const handleJoyrideCallback = data => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
      localStorage.removeItem('registering');
    }
  };
  return [step, run, handleJoyrideCallback];
};
