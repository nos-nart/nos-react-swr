import React from 'react'
import { Row, Table, Typography, Checkbox, Space, Button } from 'antd';
import styles from '../App.module.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTodo } from '../lib/useTodo';

const { Column } = Table;
const { Text } = Typography;

export const TodoList = () => {
  const [loading, setLoading] = React.useState(false);

  console.log('run 1')
  const { todos, error } = useTodo('/todos');
  console.log('run 2')
  React.useEffect(() => {
    if (!todos) {
      console.log('loading')
    }
    console.log('xxx ~> ', todos)
  }, []);

  console.log('yyy ~> ', todos);

  // if (!todos) { setLoading(true) }

  return (
    <Row>
      {JSON.stringify(todos)}
      {/* <Table
        className={styles.wfull}
        bordered={true}
        loading={loading}
        hasData={todos.length}
        dataSource={todos || []}
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
      </Table> */}
    </Row>
  )
}
