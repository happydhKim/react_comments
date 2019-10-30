import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/comment';

const WriteComment = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingComment, addedComment } = useSelector((state) => state.comment);

  useEffect(() => {
    setText('');
  }, [addedComment === true]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        text
      }
    });
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
      <Input.TextArea maxLength={300} placeholder="욕설은 나빠요! 예쁜말만 해주세요." value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingComment}>등록하기</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
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
