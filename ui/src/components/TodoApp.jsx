import React from 'react'
import { TodoHeader, TodoFilter, TodoList, TodoFooter } from '.';
import { Divider } from 'antd';

export const TodoApp = () => {
  return (
    <>
      <br/>
      <TodoHeader />
      <br/>
      <TodoFilter />
      <br/>
      <TodoList />
      <Divider/>
      <TodoFooter />
    </>
  )
}
