import { Container, styled } from "@material-ui/core"
import React from "react"
import { TodoInput } from "../../components/todo/TodoInput"
import { TodoOverview } from "../../components/todo/TodoOverview"

const TodoLayout = styled(Container)({
  padding: '16px',
  width: '100%',
  maxWidth: '768px'
})

export const TodoOrganizer: React.FC = () => {
  
  return (
    <TodoLayout>
      <TodoInput />
      <TodoOverview />
    </TodoLayout>
  )
}