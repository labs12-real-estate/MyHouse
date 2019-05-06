export const activeNavItemStyles = (path1, path2) => {
  return path1 !== path2 ? 'dashboard_sidebar_navitem' : 'dashboard_sidebar_active_navitem';
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
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
  return Math.round(sqFt * 0.0000229568);
};
