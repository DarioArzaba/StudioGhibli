import {ActionType, SignIn, SignOut} from '../actions/actions';

export type AuthActions = SignIn | SignOut;

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return {
        ...state,

        user: action.payload,
      };
    case ActionType.SIGN_OUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
