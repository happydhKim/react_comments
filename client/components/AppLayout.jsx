import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Menu, Input, Modal, Button
} from 'antd';
import Login from "./Login";

const AppLayout = ({ children }) => {
  const [state, setState] = useState(false);
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

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="logo">로고</Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item key="nothing">더미</Menu.Item>
        <Menu.Item key="signup"><Link href="/Signup"><a>회원가입</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/Profile"><a>회원정보</a></Link></Menu.Item>
        <Menu.Item key="login"><Button type="primary" onClick={showModal}>로그인</Button></Menu.Item>
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
