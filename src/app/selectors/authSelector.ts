import {AppState} from '../reducers/combineReducers';

const authSelector = (state: AppState) => state.auth;

export const selectUserAuth = (state: AppState) => authSelector(state).user;
