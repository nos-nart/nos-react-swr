import React from 'react'
import { Row, Col, Button, Input, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import useSWR, { mutate } from 'swr';
import axios from 'axios';

const { Title } = Typography;
const fetcher = (url) => axios.get(url).then(res => res.data);
const baseURL = 'http://localhost:4000/todos';

export const TodoHeader = () => {
  const [task, setTask] = React.useState('');
  const { data } = useSWR(baseURL, fetcher);

  //NOTE: https://swr.vercel.app/docs/mutation#mutation-and-post-request
  const onAdd  = async () => {
    mutate(baseURL, [...data, {title: task, id: nanoid(), complete: false }], false);
    await axios({
      url: baseURL,
      method: 'POST',
      data: {
        title: task,
        id: nanoid(),
        complete: false
      }
    });
    setTask('');
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
