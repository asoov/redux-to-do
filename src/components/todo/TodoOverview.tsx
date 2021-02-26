import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, selectTodos } from '../../features/todo'
import { TodoTable } from "./TodoTable"


export const TodoOverview: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  
  useEffect(() => {
    dispatch(fetchTodos())
  },[dispatch])
  
  return (
    <>
      {todos.length && (
        <TodoTable todos={todos} />
      )}
    </>
  )
}