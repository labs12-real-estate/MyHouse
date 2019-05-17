import Overview from '../assets/icons/dashboard-icons/overview.svg';
import DesignStudio from '../assets/icons/dashboard-icons/design-studio.svg';
import myHouseProfile from '../assets/icons/dashboard-icons/my-house-profile.svg';
import Settings from '../assets/icons/dashboard-icons/settings.svg';
import valuationPlayground from '../assets/icons/dashboard-icons/valuation-playground.svg';
import mortgageCalculator from '../assets/icons/dashboard-icons/mortgage-calculator.svg';

export const dashboardSidebarData = [
  {
    navTitle: 'Overview',
    path: '/overview',
    icon: Overview,
    id: Math.random(),
    target: 'overview'
  },
  {
    navTitle: 'MyHouse Profile',
    path: '/myhouse',
    icon: myHouseProfile,
    id: Math.random(),
    target: 'myhouse'
  },
  {
    navTitle: 'Valuation Playground',
    path: '/valuation-playground',
    icon: valuationPlayground,
    id: Math.random(),
    target: 'valuationPlayground'
  },
  {
    navTitle: 'Mortgage Calculator',
    path: '/mortgage-calculator',
    icon: mortgageCalculator,
    id: Math.random(),
    target: 'mortgageCalculator'
  },
  {
    navTitle: 'Design Studio',
    path: '/design-studio',
    icon: DesignStudio,
    id: Math.random(),
    target: 'designStudio'
  },
  {
    navTitle: 'Settings',
    path: '/settings',
    icon: Settings,
    id: Math.random(),
    target: 'settings'
  }
];
