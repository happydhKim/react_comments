import React from 'react';
import { useSelector } from 'react-redux';
import WriteComment from '../components/WriteComment';
import Comment from '../components/Comment';

const Main = () => {
  // const { user } = useSelector((state) => state.user.user);
  const { isLoggedIn } = useSelector((state) => state.user.isLoggedIn);
  const { comment } = useSelector((state) => state.comment);
  return (
    <>
      <div>
        {isLoggedIn && <WriteComment />}
        {comment.map((c) => <Comment key={c} comment={c} />)}
      </div>
    </>
  );
};
export default Main;
