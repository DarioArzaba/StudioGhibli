import {AppState} from '../reducers/combineReducers';

const themeSelector = (state: AppState) => state.theme;

export const selectTheme = (state: AppState) => themeSelector(state).theme;
