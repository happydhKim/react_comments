import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

const WriteComment = () => {
  const { imagePaths } = useSelector((state) => state.comment);
  return (
    <Form encType="multipart/form-data">
      <Input.TextArea maxLength={300} placeholder="욕설은 나빠요! 예쁜말만 해주세요." />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">이미지올리기</Button>
      </div>
      <div>
        {imagePaths.imagePaths.map((v, i) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:3005/${v}`} stype={{ width: 200 }} alt={v} />
            <div><Button>x</Button></div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default WriteComment;
