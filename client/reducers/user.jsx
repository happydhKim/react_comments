
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

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const loginAction = {
  type: LOGIN,
  data: {
    nickname: 'kim'
  }
};

export const logoutAction = {
  type: LOGOUT
};

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
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
