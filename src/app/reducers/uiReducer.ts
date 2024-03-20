import {ActionType, UpdateTheme} from '../actions/actions';

type UserInterfaceActions = UpdateTheme;

const initialState = {
  theme: 'default',
};

const uiReducer = (state = initialState, action: UserInterfaceActions) => {
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
