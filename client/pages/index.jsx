import React from 'react';
import {
  Form, Input, Button, Card, Avatar, Icon
} from 'antd';

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

const Main = () => {
  const a = 3;
  return (
    <>
      <div>
        {dummy.isLoggedIn && (
          <Form encType="multipart/form-data">
            <Input.TextArea maxLength={300} placeholder="욕설은 나빠요! 예쁜말만 해주세요." />
            <div>
              <input type="file" multiple hidden />
              <Button>이미지 업로드</Button>
              <Button type="primary" style={{ float: 'right' }} htmlType="submit">이미지올리기</Button>
            </div>
            <div>
              {dummy.imagePaths.map((v, i) => (
                <div key={v} style={{ display: 'inline-block' }}>
                  <img src={`http://localhost:3005/${v}`} stype={{ width: 200 }} alt={v} />
                  <div><Button>x</Button></div>
                </div>
              ))}
            </div>
          </Form>
        )}
        {dummy.mainPosts.map((c) => (
          <Card
            key={+c.createdAt}
            cover={c.img && <img alt="test" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="like" key="like" />,
              <Icon type="dislike" key="dislike" />
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        ))}
      </div>
    </>
  );
};
export default Main;
