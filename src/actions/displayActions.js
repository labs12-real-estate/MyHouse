import { TOGGLE_SIDEBAR_DRAWER, CLOSE_SIDEBAR_DRAWER } from '.';

export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR_DRAWER
});

export const closeSideBar = () => ({
  type: CLOSE_SIDEBAR_DRAWER
});
