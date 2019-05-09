import React, { useState, useEffect } from 'react';
import Button from '../components/buttons/Button';
import Loader from 'react-loader-spinner';

export const activeNavItemStyles = (path1, path2) => {
  return path1 !== path2 ? 'dashboard_sidebar_navitem' : 'dashboard_sidebar_active_navitem';
};

export const commaSeparator = num =>
  `$${Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const numberWithCommas = num => {
  // no dollar sign added
  return `${Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const sqFtToAcreConversion = sqFt => {
  return `${Math.round(sqFt * 0.0000229568 * 100) / 100}`;
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  return width;
};

export const loginModalButtonRender = fetching => {
  return !fetching ? (
    <Button buttonStyle="modal_login_button" buttonText="Login" />
  ) : (
    <div style={{ textAlign: 'center' }}>
      <Loader height={50} width={50} type="TailSpin" color="#2868d9" />
    </div>
  );
};
