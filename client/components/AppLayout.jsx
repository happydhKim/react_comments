import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Menu, Input, Modal, Button
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_REQUEST, LOAD_USER_REQUEST } from '../reducers/user';
import Login from './Login';

const AppLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setState({
      visible: true
    });
  };

  const handleOk = (e) => {
    console.log(e);
    setState({
      visible: false
    });
  };

  const handleCancel = (e) => {
    console.log(e);
    setState({
      visible: false
    });
  };

  useEffect(() => {
    if (!user) {
      dispatch({
        type: LOAD_USER_REQUEST
      });
    }
  }, []);

  useEffect(() => {
    setState({
      visible: false
    });
  }, [user === true]);

  const onLogOut = () => {
    dispatch({
      type: LOGOUT_REQUEST
    });
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="logo">로고</Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item key="nothing">더미</Menu.Item>
        <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>회원정보</a></Link></Menu.Item>
        {user
          ? <Menu.Item key="logout"><Button type="primary" onClick={onLogOut}>로그아웃</Button></Menu.Item>
          : <Menu.Item key="login"><Button type="primary" onClick={showModal}>로그인</Button></Menu.Item>}
        <Modal
          title="로그인을 해주세요"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Login />
        </Modal>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element
};

export default AppLayout;
