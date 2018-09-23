import { TabNav } from '../navigations';

const initialState = TabNav.router.getStateForAction(TabNav.router.getActionForPathAndParams('Home'));

const nav = (state = initialState, action) => {
  const nextState = TabNav.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default nav;