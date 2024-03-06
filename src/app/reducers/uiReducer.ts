import {Dimensions} from 'react-native';
import {
  UpdateOrientationState,
  ActionType,
  ToggleGetFilmsButtonIsPressed,
  IncrementFilmsScrollIndex,
} from '../actions/actions';

type UserInterfaceActions =
  | UpdateOrientationState
  | ToggleGetFilmsButtonIsPressed
  | IncrementFilmsScrollIndex;

const initialState = {
  screenDimensions: Dimensions.get('window'),
  isPressed: false,
  index: 5,
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
    case ActionType.INCREMENT_FILMS_SCROLL_INDEX:
      return {
        ...state,
        index: state.index + 4,
      };
    default:
      return state;
  }
};

export default uiReducer;
