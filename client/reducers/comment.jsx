/**
 * @description Comment Store
 */
export const initialState = {
  comment: [{
    User: {
      id: 1,
      nickname: ' kim',
      content: '1댓글'
    }
  }],
  imagePaths: []
};

const ADD_COMMENT = 'ADD_COMMENT';
const ADD_DUMMY = 'ADD_DUMMY';

export const addComment = {
  type: ADD_COMMENT
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        comments: [action.data, ...state.comments]
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
