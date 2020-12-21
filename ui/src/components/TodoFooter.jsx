import React from 'react'
import { Row, Typography, Button } from 'antd';
import { ClearOutlined } from '@ant-design/icons';
import { useTodo } from '../lib/useTodo';

const { Text } = Typography;

export const TodoFooter = () => {
  const { todos, error } = useTodo('/todos');

  return (
    <Row justify="space-between">
      <Text type="secondary">{todos !== undefined ? todos.length : 0} reamaning</Text>
      <Button type="primary" icon={<ClearOutlined />} size="small">
        Clear all
      </Button>
    </Row>
  )
}
