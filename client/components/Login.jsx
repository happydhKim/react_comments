import React, { useCallback } from 'react';
import {
  Form, Input, Button
} from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { commonInput } from '../hooks';
import { loginAction } from '../reducers/user';

const Login = () => {
  const [id, onChangeId] = commonInput('');
  const [password, onChangePassword] = commonInput('');
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAction);
    console.log({
      id, password
    });
  }, [id, password]);
  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} onChange={onChangePassword} required />
        </div>
        <div>
          <Button type="primary" htmlType="submit">로그인</Button>
          <Link href="/signup"><a><Button type="primary">회원가입</Button></a></Link>
        </div>
      </Form>
    </>
  );
};

export default Login;
