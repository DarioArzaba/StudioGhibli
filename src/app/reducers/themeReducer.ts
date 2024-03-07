import {ActionType, UpdateTheme} from '../actions/actions';

type ThemeActions = UpdateTheme;

const initialState = {
  theme: 'default',
};

const uiReducer = (state = initialState, action: ThemeActions) => {
  switch (action.type) {
    case ActionType.UPDATE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
