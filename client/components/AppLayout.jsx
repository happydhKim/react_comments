import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input } from 'antd';

const AppLayout = ({ children }) => (
  <div>
    <Menu mode="horizontal">
      <Menu.Item key="logo">로고</Menu.Item>
      <Menu.Item key="search">
        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
      </Menu.Item>
      <Menu.Item key="nothing">더미</Menu.Item>
      <Menu.Item key="signup"><Link href="/Signup"><a>회원가입</a></Link></Menu.Item>
      <Menu.Item key="profile"><Link href="/Profile"><a>회원정보</a></Link></Menu.Item>
    </Menu>
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.element
};

export default AppLayout;
