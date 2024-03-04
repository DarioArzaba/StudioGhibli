import {Dimensions} from 'react-native';
import {
  UpdateOrientationState,
  ActionType,
  ToggleGetFilmsButtonIsPressed,
} from '../actions/actions';

type UserInterfaceActions =
  | UpdateOrientationState
  | ToggleGetFilmsButtonIsPressed;

const initialState = {
  screenDimensions: Dimensions.get('window'),
  isPressed: false,
};

const uiReducer = (state = initialState, action: UserInterfaceActions) => {
  switch (action.type) {
    case ActionType.UPDATE_ORIENTATION_STATE:
      return {
        ...state,
        screenDimensions: Dimensions.get('window'),
      };
    case ActionType.TOGGLE_GET_FILMS_BUTTON_IS_PRESSED:
      return {
        ...state,
        isPressed: !state.isPressed,
      };
    default:
      return state;
  }
};

export default uiReducer;
