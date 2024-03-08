import {AppState} from '../reducers/combineReducers';

const uiSelector = (state: AppState) => state.userinterface;

export const selectScreenDimensions = (state: AppState) =>
  uiSelector(state).screenDimensions;

export const selectTheme = (state: AppState) => uiSelector(state).theme;
