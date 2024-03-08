import {Dimensions} from 'react-native';
import {
  ActionType,
  UpdateOrientationState,
  UpdateTheme,
} from '../actions/actions';

type UserInterfaceActions = UpdateOrientationState | UpdateTheme;

const initialState = {
  screenDimensions: Dimensions.get('window'),
  theme: 'default',
};

const uiReducer = (state = initialState, action: UserInterfaceActions) => {
  switch (action.type) {
    case ActionType.UPDATE_ORIENTATION_STATE:
      return {
        ...state,
        screenDimensions: Dimensions.get('window'),
      };
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
