import { TableContainer, Table, TableHead, TableBody } from "@material-ui/core"
import React from "react"
import { TodoItem } from "../../features/todo.types"
import { TodoTableItem } from "./TodoTableItem"

interface TodoTableProps {
  todos: TodoItem[]
}

export const TodoTable: React.FC<TodoTableProps> = ({todos}) => {

  return (
    <TableContainer>
      <Table>
        <TableHead>
        </TableHead>
        <TableBody>
          {todos.map((todo: TodoItem) => (
            <TodoTableItem key={todo.id} todo={todo} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}