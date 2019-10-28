import React, { useState, useCallback } from 'react';
import {
  Form, Input, Checkbox, Button
} from 'antd';

const Signup = () => {
  const commonInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  };

  const [id, onChangeId] = commonInput('');
  const [nickname, onChangeNickName] = commonInput('');
  const [password, onChangePassword] = commonInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [agree, setAgree] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!agree) {
      return setAgreeError(true);
    }
    console.log({
      id, nickname, password, passwordCheck, agree
    });
  }, [password, passwordCheck, agree]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  const onChangeAgree = useCallback((e) => {
    setAgreeError(false);
    setAgree(e.target.checked);
  }, []);

  return (
    <>
      <div>회원가입</div>
      <Form onSubmit={onSubmit} style={{ paddind: 10, margin: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickName} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {passwordError && <div style={{ color: 'red' }}>비밀번호를 다시 확인해 주세요.</div>}
        </div>
        <div>
          <Checkbox name="user-agree" checked={agree} onChange={onChangeAgree}>약관에 동의합니다.</Checkbox>
          {agreeError && <div style={{ color: 'red' }}>약관에 동의해주세요.</div>}
        </div>
        <div>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
