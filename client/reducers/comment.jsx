/**
 * @description Comment Store initial Object
 * mainComments 댓글들
 * imagePaths 이미지 경로
 * addCommentErrorReason 댓글 등록 실패 사유
 * isAddingComment 댓글 등록
 * addedComment 댓글 등록 성공
 */
export const initialState = {
  mainComments: [],
  imagePaths: [],
  addCommentErrorReason: '',
  isAddingComment: false,
  addedComment: false
};

export const LOAD_MAIN_COMMENTS_REQUEST = 'LOAD_MAIN_COMMENTS_REQUEST';
export const LOAD_MAIN_COMMENTS_SUCCESS = 'LOAD_MAIN_COMMENTS_SUCCESS';
export const LOAD_MAIN_COMMENTS_FAILURE = 'LOAD_MAIN_COMMENTS_FAILURE';

export const LOAD_HASHTAG_COMMENTS_REQUEST = 'LOAD_HASHTAG_COMMENTS_REQUEST';
export const LOAD_HASHTAG_COMMENTS_SUCCESS = 'LOAD_HASHTAG_COMMENTS_SUCCESS';
export const LOAD_HASHTAG_COMMENTS_FAILURE = 'LOAD_HASHTAG_COMMENTS_FAILURE';

export const LOAD_USER_COMMENTS_REQUEST = 'LOAD_USER_COMMENTS_REQUEST';
export const LOAD_USER_COMMENTS_SUCCESS = 'LOAD_USER_COMMENTS_SUCCESS';
export const LOAD_USER_COMMENTS_FAILURE = 'LOAD_USER_COMMENTS_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const LIKE_COMMENT_REQUEST = 'LIKE_COMMENT_REQUEST';
export const LIKE_COMMENT_SUCCESS = 'LIKE_COMMENT_SUCCESS';
export const LIKE_COMMENT_FAILURE = 'LIKE_COMMENT_FAILURE';

export const UNLIKE_COMMENT_REQUEST = 'UNLIKE_COMMENT_REQUEST';
export const UNLIKE_COMMENT_SUCCESS = 'UNLIKE_COMMENT_SUCCESS';
export const UNLIKE_COMMENT_FAILURE = 'UNLIKE_COMMENT_FAILURE';


const ADD_DUMMY = 'ADD_DUMMY';

export const addComment = {
  type: ADD_COMMENT_REQUEST
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: '안녕하세요',
    UserId: 1,
    User: {
      nickname: 'kim'
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: '',
        addedComment: false
      };
    }
    case ADD_COMMENT_SUCCESS: {
      // const commentIndex = state.mainEvents.findIndex((v) => v.id === action.data.eventId);
      // const comment = state.mainEvents[commentIndex];
      // const Content = [...comment.content, dummyComment];
      // const mainComment = [...state.mainEvents];
      // mainComments[commentIndex] = { ...comment, Content };
      return {
        ...state,
        isAddingComment: false,
        // mainComment,
        mainComment: [dummyComment, ...state.mainComment],
        addedComment: true
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        addCommentErrorReason: action.error
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
