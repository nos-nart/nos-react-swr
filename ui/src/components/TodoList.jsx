import React from 'react'
import { Row, Table, Typography, Checkbox, Space, Button, Empty } from 'antd';
import styles from '../App.module.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTodo } from '../lib/useTodo';

const { Column } = Table;
const { Text } = Typography;

export const TodoList = () => {
  const { todos, error } = useTodo('/todos');

  if (error) return <Empty />;

  return (
    <Row>
      <Table
        className={styles.wfull}
        bordered={true}
        loading={todos === undefined}
        hasData={todos && todos.length}
        dataSource={todos}
        pagination={false}
        size="small"
      >
        <Column
          title="ID"
          dataIndex="id"
          key="id"
          render={(_, record) => (
            <Text>{record.id}</Text>
          )}
        />
        <Column
          title="Title"
          dataIndex="title"
          key="title"
          render={(_, record) => (
            <Text>{record.title}</Text>
          )}
        />
        <Column
          title="Status"
          dataIndex="complete"
          key="status"
          render={(_, record) => (
            <Checkbox checked={record.complete}/>
          )}
        />
        <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <Button
                  size="small" danger
                  icon={<DeleteOutlined />}
                />
                <Button size="small" icon={<EditOutlined />}/>
              </Space>
            )}
          />
      </Table>
    </Row>
  )
}
