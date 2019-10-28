import React from 'react';
import { Form, Button, Input } from 'antd';

const UserEditForm = () => (
  <Form style={{ marginBottom: 20, border: '1px solid #e9e9e9', padding: 20 }}>
    <Input addonBefore="닉네임" />
    <Button type="primary">수정</Button>
  </Form>
);

export default UserEditForm;
