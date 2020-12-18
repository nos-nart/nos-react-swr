import React from 'react'
import { Row, Col, Button, Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const TodoHeader = () => {
  return (
    <>
      <Row justify="center">
        <Title type="success" level="3">swr + antd</Title>
      </Row>
      <Row justify="space-between" gutter="8">
        <Col flex="auto">
          <Input placeholder="What need to be done?" allowClear  />
        </Col>
        <Col flex="100px">
          <Button
            type="primary"
            icon={<PlusOutlined />}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  )
}
