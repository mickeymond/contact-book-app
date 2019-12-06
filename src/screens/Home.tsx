import React from 'react';
import { Layout, Card, Icon, Avatar, Col, Button, Row } from 'antd/es';

const Home: React.FC = () => {
  return (
    <Layout.Content style={{ padding: '20px 50px' }}>
      <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          actions={[
            <Icon type="eye" key="eye" />,
            <Icon type="edit" key="edit" />,
            <Icon type="delete" style={{ color: 'red' }} key="delete" />,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          actions={[
            <Icon type="eye" key="eye" />,
            <Icon type="edit" key="edit" />,
            <Icon type="delete" style={{ color: 'red' }} key="delete" />,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          actions={[
            <Icon type="eye" key="eye" />,
            <Icon type="edit" key="edit" />,
            <Icon type="delete" style={{ color: 'red' }} key="delete" />,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      </Row>
      <Button
        style={{position: 'absolute', bottom: '50px', right: '50px'}}
        type="danger"
        shape="circle"
        icon="plus"
        size="large"
      />
    </Layout.Content>
  );
}

export default Home;
