
/**
 * @description User Store
 */
export const initialState = {
  isLoggedIn: false,
  user: {}
};

const LOGIN = 'LOGIN';

const loginAction = {
  type: LOGIN,
  data: {
    nickname: 'kim'
  }
};

const LOGOUT = 'LOGOUT';

const logoutAction = {
  type: LOGOUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default:
  }
};

export default reducer;
