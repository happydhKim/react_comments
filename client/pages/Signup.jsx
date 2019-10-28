import React from 'react';
import {
  Form, Input, Checkbox, Button
} from 'antd';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Signup = () => {
  const onSubmit = () => { };
  const onChangeId = () => { };
  const onChangeNickName = () => { };
  const onChangePassword = () => { };
  const onChangePasswordChk = () => { };
  const onChangeAgree = () => { };
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <title>댓글 달아봐요</title>
      </Head>
      <AppLayout>
        <div>회원가입</div>
        <Form>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" required onChange={onChangeNickName} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <br />
            <Input name="user-password-check" type="password" required onChange={onChangePasswordChk} />
          </div>
          <div>
            <Checkbox name="user-agree" value="" onChange={onChangeAgree}>약관에 동의합니다.</Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
