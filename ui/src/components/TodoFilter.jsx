import React from 'react'
import { Row, Radio } from 'antd';

export const TodoFilter = () => {
  return (
    <Row justify="center">
      <Radio.Group>
        <Radio.Button value="all">all</Radio.Button>
        <Radio.Button value="active">active</Radio.Button>
        <Radio.Button value="completed">completed</Radio.Button>
      </Radio.Group>
    </Row>
  )
}
