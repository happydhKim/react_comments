import React from 'react';
import {
  Form, Input, Button, List, Icon, Card
} from 'antd';

const Profile = () => (
  <>
    <div>
      <Form style={{ marginBottom: 20, border: '1px solid #e9e9e9', padding: 20 }}>
        <Input addonBefore="닉네임" />
        <Button type="primary">수정</Button>
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
      </Form>
    </div>
  </>
);

export default Profile;
