import React from 'react';
import { TodoList } from '.';
import { Typography, Row } from 'antd';

const { Title } = Typography;

export const TodoApp: React.FC = () => {
  return (
    <>
      <Row>
        <Title type="success" level={3}>swr + antd</Title>
      </Row>
      <TodoList />
    </>
  )
}
