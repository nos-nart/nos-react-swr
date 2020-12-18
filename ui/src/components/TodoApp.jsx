import React from 'react'
import { TodoHeader, TodoFilter, TodoList } from '.';


export const TodoApp = () => {
  return (
    <>
      <br/>
      <TodoHeader />
      <br/>
      <TodoFilter />
      <br/>
      <TodoList />
    </>
  )
}
