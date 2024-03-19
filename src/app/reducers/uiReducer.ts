import {ActionType, UpdateTheme} from '../actions/actions';

type UIActions = UpdateTheme;

const initialState = {
  theme: 'default',
};

const uiReducer = (state = initialState, action: UIActions) => {
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
