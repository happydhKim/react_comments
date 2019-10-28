import React from 'react';
import WriteComment from '../components/WriteComment';
import Comment from '../components/Comment';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: ' kim',
      content: '1댓글'
    }
  }]
};

const Main = () => (
  <>
    <div>
      {dummy.isLoggedIn && <WriteComment />}
      {dummy.mainPosts.map((c) => <Comment key={c} />)}
    </div>
  </>
);

export default Main;
