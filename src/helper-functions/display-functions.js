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

export const acreToSqFtConversion = acre => {
  return Math.round(acre / 0.0000229568);
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

export const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // user doesn't have to scroll to the bottom of the window to trigger infiniteScroll
      if (Math.ceil(document.documentElement.offsetHeight) - Math.ceil(window.innerHeight + document.documentElement.scrollTop) > 100 || isFetching) {
        return;
      }
      setIsFetching(true);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export const loginModalButtonRender = (fetching, buttonText, buttonStyle) => {
  return !fetching ? (
    <Button buttonStyle={buttonStyle} buttonText={buttonText} />
  ) : (
    <div style={{ textAlign: 'center' }}>
      <Loader height={50} width={50} type="TailSpin" color="#2868d9" />
    </div>
  );
};

export const normalizeContent = content => (content ? content.trim() : content);

export const useWindowScrollY = () => {
  const [yPosition, setYPosition] = useState(window.innerYPosition);

  useEffect(() => {
    updateScrollYPosition();
    window.addEventListener('scroll', updateScrollYPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollYPosition);
    };
  }, []);

  const updateScrollYPosition = () => {
    setYPosition(window.scrollY);
  };
  return yPosition;
};

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
};
