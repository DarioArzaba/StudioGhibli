import User from '../../models/User';
import {
  ActionType,
  UserSignIn,
  UserSignOut,
  UserSignUp,
} from '../actions/actions';

export type AuthActions = UserSignIn | UserSignOut | UserSignUp;

const initialState = {
  user: null as User | null,
};

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case ActionType.SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.SIGN_IN:
      return {
        ...state,
        user: {
          ...state.user,
          isSignedIn: true,
        },
      };
    case ActionType.SIGN_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          isSignedIn: false,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
