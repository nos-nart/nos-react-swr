import React from 'react'
import { Row, Col, Button, Input, Typography, notification  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import useSWR, { mutate } from 'swr';
import axios from 'axios';

const { Title } = Typography;
const fetcher = (url) => axios.get(url).then(res => res.data);
const baseURL = 'http://localhost:4000/todos';

const openNotificationWithIcon = (type, mssg, desc) => {
  notification[type]({
    message: mssg,
    duration: 3,
    description: desc,
  });
};

export const TodoHeader = () => {
  const [task, setTask] = React.useState('');
  const { data } = useSWR(baseURL, fetcher);

  //NOTE: https://swr.vercel.app/docs/mutation#mutation-and-post-request
  const onAdd  = async () => {
    await axios({
      url: baseURL,
      method: 'POST',
      data: {
        title: task,
        id: nanoid(),
        complete: false
      }
    });
    mutate(baseURL, [...data, {title: task, id: nanoid(), complete: false }], false);
    setTask('');
    openNotificationWithIcon('success', 'Successfully', 'Added an item to todo-list 👍');
  }

  return (
    <>
      <Row justify="center">
        <Title type="success" level="3">swr + antd</Title>
      </Row>
      <Row justify="space-between" gutter="8">
        <Col flex="auto">
          <Input
            placeholder="What need to be done?"
            allowClear
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Col>
        <Col flex="100px">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => onAdd()}
          >
            Add
          </Button>
        </Col>
      </Row>
    </>
  )
}
