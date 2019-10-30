/**
 * @description User Store initial Object
 * isLoggedIn 로그인 여부
 * isLoggingOut 로그아웃 시도중
 * isLoggingIn 로그인 시도중
 * logInErrorReason 로그인 실패 사유
 * signedUp 회원가입 성공
 * isSigningUp 회원가입 시도중
 * signUpErrorReason 회원가입 실패 사유
 * user 사용자
 * followingList 팔로잉 리스트
 * followerList 팔로워 리스트
 * userInfo 사용자 정보
 */
export const initialState = {
  isLoggedIn: false,
  isLoggingOut: false,
  isLoggingIn: false,
  logInErrorReason: '',
  signedUp: false,
  isSigningUp: false,
  signUpErrorReason: '',
  user: null,
  followingList: [],
  followerList: [],
  userInfo: null
};

const dummyUser = {
  nickname: 'kim',
  comment: [],
  Followings: [],
  Followers: []
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_COMMENT_TO_ME = 'ADD_COMMENT_TO_ME';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        logInErrorReason: ''
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: dummyUser,
        isLoading: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        logInErrorReason: action.error,
        user: null
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorReason: ''
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
