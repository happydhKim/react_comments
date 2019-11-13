import React, { setState, useCallback } from 'react';
import {
  Form, Input, Button
} from 'antd';
import Link from 'next/link';
import KakaoLogin from 'react-kakao-login';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { commonInput } from '../hooks';
import { LOGIN_REQUEST } from '../reducers/user';

const Login = () => {
  const [userId, onChangeId] = commonInput('');
  const [password, onChangePassword] = commonInput('');
  const { isLoggingIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const responseKakao = (res) => {
    console.log(res);
    axios.post('http://localhost:3005/api/auth/kakao/value', {
      body: res
    })
      .then((response) => console.log(response));
    // setState({
    //   nickname: res.profile.properties.nickname
    // });
  };
  const responseFailure = (err) => {
    console.log('안돼 ');
    console.log(err);
  };

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_REQUEST,
      data: {
        userId, password
      }
    });
  }, [userId, password]);
  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={userId} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
          <KakaoLogin
            jsKey={process.env.KAKAO_KEY}
            buttonText="Kakao"
            onSuccess={responseKakao}
            onFailure={responseFailure}
            getProfile
          />
          <Link href="/signup"><a><Button type="primary">회원가입</Button></a></Link>
        </div>
      </Form>
    </>
  );
};

export default Login;
