import React from 'react';
import { Table, Space, Button, Row, Checkbox, Typography, notification, Radio } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from '../App.module.css';
import { useGetTodo } from '../lib/useTodo';

const { Column } = Table;
const { Text } = Typography;


export const TodoList: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const { todos, error } = useGetTodo('/todos');

  return (
    <>
      <br/>
      <Row justify="center">
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="active">Active</Radio.Button>
          <Radio.Button value="completed">Completed</Radio.Button>
        </Radio.Group>
      </Row>
      <br/>
      <Row>
      <Table
          className={styles.wFull}
          bordered={true}
          hasData={todos.length}
          dataSource={filterTodo}
          pagination={false}
          size="small"
        >
          <Column
            title="ID"
            dataIndex="id"
            key="id"
            render={(_, record) => (
              <Text className={record.complete && styles.lineThrough}>{record.id}</Text>
            )}
          />
          <Column
            title="Title"
            dataIndex="title"
            key="title"
            render={(_, record) => (
              <Text className={record.complete && styles.lineThrough}>{record.title}</Text>
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
    </>
  )
}
