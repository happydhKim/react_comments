import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <Card
    key={+comment.createdAt}
    cover={comment.img && <img alt="example" src={comment.img} />}
    actions={[
      <Icon type="retweet" key="retweet" />,
      <Icon type="heart" key="heart" />,
      <Icon type="like" key="like" />,
      <Icon type="dislike" key="dislike" />
    ]}
  >
    <Card.Meta
      avatar={<Avatar>{comment.User.nickname[0]}</Avatar>}
      title={comment.User.nickname}
      description={comment.content}
    />
  </Card>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    User: PropTypes.object,
    id: PropTypes.number,
    nickname: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object
  })
};

export default Comment;
