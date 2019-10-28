import React from 'react';
import Link from 'next/link';
import { Menu, Input } from 'antd';

const AppLayout = ({ children }) => (
  <div>
    <Menu mode="horizontal">
      <Menu.Item key="logo">로고</Menu.Item>
      <Menu.Item key="">
        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
      </Menu.Item>
      <Menu.Item key="">더미</Menu.Item>
      <Menu.Item key=""><Link href="/Signup"><a>회원가입</a></Link></Menu.Item>
      <Menu.Item key=""><Link href="/Profile"><a>회원정보</a></Link></Menu.Item>
    </Menu>
    {children}
  </div>
);

export default AppLayout;
