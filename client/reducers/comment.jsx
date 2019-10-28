/**
 * @description Comment Store
 */
export const initialState = {
  comment: []
};

const ADD_COMMENT = 'ADD_COMMENT';
const ADD_DUMMY = 'ADD_DUMMY';

const addComment = {
  type: ADD_COMMENT
};

const addDummy = {
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
    default:
  }
};

export default reducer;
