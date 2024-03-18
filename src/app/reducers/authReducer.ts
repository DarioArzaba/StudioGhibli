import {ActionType, AuthenticateUser} from '../actions/actions';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action: AuthenticateUser) => {
  switch (action.type) {
    case ActionType.AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
