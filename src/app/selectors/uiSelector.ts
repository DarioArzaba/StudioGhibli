import {AppState} from '../reducers/combineReducers';

const uiSelector = (state: AppState) => state.userinterface;

export const selectCurrentOrientation = (state: AppState) =>
  uiSelector(state)?.isPortrait;
export const selectButtonIsPressed = (state: AppState) =>
  uiSelector(state)?.isPressed;
