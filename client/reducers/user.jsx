
/**
 * @description User Store
 */

const dummyUser = {
  nickname: 'kim',
  comment: [],
  Followings: [],
  Followers: []
};

export const initialState = {
  isLoggedIn: false,
  user: null
};

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP = 'SIGN_UP';

export const loginAction = {
  type: LOGIN,
  data: {
    nickname: 'kim'
  }
};

export const logoutAction = {
  type: LOGOUT
};

export const signUpAction = (data) => ({
  type: SIGN_UP,
  data
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
