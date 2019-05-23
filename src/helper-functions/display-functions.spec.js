import {
  normalizeContent,
  loginModalButtonRender,
  activeNavItemStyles,
  commaSeparator,
  numberWithCommas,
  sqFtToAcreConversion,
  acreToSqFtConversion
} from './display-functions';
import React from 'react';
import Button from '../components/buttons/Button';
import Loader from 'react-loader-spinner';

describe('activeNavItemStyles', () => {
  it('returns the correct styling', () => {
    expect(activeNavItemStyles('one path', 'another path')).toEqual('dashboard_sidebar_navitem');
  });
  it('returns the active styling if paths are the same', () => {
    expect(activeNavItemStyles('one path', 'one path')).toEqual('dashboard_sidebar_active_navitem');
  });
});

describe('commaSeparator', () => {
  it('adds dollar sign and a comma to number above 3 and below 7 digits', () => {
    expect(commaSeparator(1000)).toEqual('$1,000');
  });
  it('adds dollar sign and 2 or more commas to number above 6 digits', () => {
    expect(commaSeparator(1000789)).toEqual('$1,000,789');
  });
});

describe('numberWithCommas', () => {
  it('adds a comma to number above 3 and below 7 digits', () => {
    expect(numberWithCommas(1000)).toEqual('1,000');
  });
  it('adds 2 or more commas to number above 6 digits', () => {
    expect(numberWithCommas(1000789)).toEqual('1,000,789');
  });
});

describe('sqFtToAcreConversion', () => {
  it('convert sqft to acre', () => {
    expect(sqFtToAcreConversion(1000)).toEqual('0.02');
  });
});

describe('acreToSqFtConversion', () => {
  it('convert acre to sqft', () => {
    expect(acreToSqFtConversion(0.5)).toEqual(21780);
  });
});

describe('loginModalButtonRender', () => {
  it('returns a button if not fetching', () => {
    expect(loginModalButtonRender(false, 'next', 'style')).toEqual(<Button buttonStyle="style" buttonText="next" />);
  });
  it('returns a loader if fetching', () => {
    expect(loginModalButtonRender(true)).toEqual(
      <div style={{ textAlign: 'center' }}>
        <Loader height={50} width={50} type="TailSpin" color="#2868d9" />
      </div>
    );
  });
});

describe('normalizeContent', () => {
  it('removes white space on both sides', () => {
    expect(normalizeContent(' test  ')).toEqual('test');
  });
});
