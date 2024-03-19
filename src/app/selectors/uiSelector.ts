import {AppState} from '../reducers/combineReducers';

const uiSelector = (state: AppState) => state.ui;

export const selectTheme = (state: AppState) => uiSelector(state).theme;
