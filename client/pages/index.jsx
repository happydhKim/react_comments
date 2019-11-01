import React from 'react';
import { useSelector } from 'react-redux';
import WriteComment from '../components/WriteComment';
import Comment from '../components/Comment';

const Main = () => {
  const { user } = useSelector((state) => state.user);
  const { mainComment } = useSelector((state) => state.comment);
  return (
    <>
      <div>
        {user && <WriteComment />}
        {mainComment.map((c) => <Comment key={c} comment={c} />)}
      </div>
    </>
  );
};

export default Main;
