import React from 'react';
import { Layout, Form, Input, Icon, Row, Col, List, Typography, Descriptions, Spin, Alert } from 'antd/es';
import { useAuth0 } from '../auth/react-auth0-spa';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router';
import { ADD_PHONE } from '../mutations';
import { FETCH_CONTACT } from '../queries';
import { Phone } from '../models/phone';
import { Email } from '../models/email';
import { Contact } from '../models/contact';

const ViewContact: React.FC = (props) => {
  const { user } = useAuth0();

  const { id } = useParams();
  const { loading, error, data } = useQuery(FETCH_CONTACT, { variables: { id } });

  const [ addPhone ] = useMutation(ADD_PHONE, {
    refetchQueries: [{ query: FETCH_CONTACT, variables: { id } }]
  });

  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');

  if (loading) {
    return (
      <div className="App App-header">
        <Spin indicator={<Icon type="loading" style={{ fontSize: 30 }} spin />} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{textAlign: 'center', margin: '100px 100px'}}>
        <Alert type="error" message={error.message} />
      </div>
    );
  }

  const contact: Contact = data.contacts_by_pk;

  return (
    <Layout.Content style={{ padding: '20px 50px', textAlign: 'center' }}>
      <Row>
        <Col sm={12} offset={6}>
          <Descriptions style={{margin: '20px 0px'}} title="Contact Info">
            <Descriptions.Item label="First Name">{contact.first_name}</Descriptions.Item>
            <Descriptions.Item label="Last Name">{contact.last_name}</Descriptions.Item>
          </Descriptions>
          <Form.Item>
            <Input.Search
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Add Phone Number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onSearch={value => {
                addPhone({
                  variables: {
                    contact_id: contact.id,
                    number: value
                  }
                })
                .catch(console.log)
                .finally(() => setPhone(''));
              }}
              enterButton={<Icon type="plus" />}
            />
          </Form.Item>
          <Form.Item>
            <List
              bordered
              dataSource={contact.phones}
              renderItem={(item: Phone) => (
                <List.Item
                  extra={
                    <Icon
                      type="delete"
                      style={{ color: 'red', position: 'absolute', right: '10px' }}
                      onClick={e => {
                      }}
                      key="delete" />
                  }>
                  <Typography.Text>{item.number}</Typography.Text>
                </List.Item>
              )}
            />
          </Form.Item>
          <Form.Item>
            <Input.Search
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Add Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onSearch={value => {
                setEmail('');
              }}
              enterButton={<Icon type="plus" />}
            />
          </Form.Item>
          <Form.Item>
            <List
              bordered
              dataSource={contact.emails}
              renderItem={(item: Email) => (
                <List.Item
                  extra={
                    <Icon
                      type="delete"
                      style={{ color: 'red', position: 'absolute', right: '10px' }}
                      onClick={e => {
                      }}
                      key="delete" />
                  }>
                  <Typography.Text>{item.address}</Typography.Text>
                </List.Item>
              )}
            />
          </Form.Item>
          <Descriptions style={{margin: '20px 0px'}}>
            <Descriptions.Item label="Twitter Username">
              {contact.twitter_username ? contact.twitter_username : 'Set Twitter Username'}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Layout.Content>
  );
}

export default ViewContact;