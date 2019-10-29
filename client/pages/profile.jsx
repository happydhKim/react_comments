import React from 'react';
import {
  Button, List, Icon, Card
} from 'antd';
import UserEditForm from '../components/UserEditForm';

const Profile = () => (
  <>
    <div>
      <UserEditForm />
      <List
        style={{ marginBottom: 20 }}
        grid={{ gutter: 1, xs: 1, md: 1 }}
        size="small"
        header={<div>팔로잉</div>}
        loadMore={<Button style={{ width: 100 }}>더 보기</Button>}
        bordered
        dataSource={['1', '2', '3']}
        renderItem={(item) => (
          <List.Item style={{ marginTop: 20 }}>
            <Card actions={[<Icon type="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: 20 }}
        grid={{ gutter: 1, xs: 1, md: 1 }}
        size="small"
        header={<div>팔로워</div>}
        loadMore={<Button style={{ width: 100 }}>더 보기</Button>}
        bordered
        dataSource={['1', '2', '3']}
        renderItem={(item) => (
          <List.Item style={{ marginTop: 20 }}>
            <Card actions={[<Icon type="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
    </div>
  </>
);

export default Profile;
