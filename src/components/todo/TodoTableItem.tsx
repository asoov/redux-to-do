import { TableRow, TableCell, Checkbox, IconButton, styled, InputAdornment, Input } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, markTodoResolved, editSingleTodo } from "../../features/todo"
import { TodoItem } from "../../features/todo.types"
import { Delete, Edit, Save } from '@material-ui/icons'

interface TodoTableItemProps {
  todo: TodoItem
}

const TableCellInline = styled(TableCell)({
  display: 'flex'
})


export const TodoTableItem: React.FC<TodoTableItemProps> = ({todo}) => {
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [fieldValue, setFieldValue] = useState(todo.title)
  const handleSave = () => {
    dispatch(editSingleTodo(todo.id, fieldValue))
    setIsEdit(false)
  }

  return (
    <TableRow key={todo.id}>
      <TableCell>
        <Checkbox
          checked={todo.completed}
          onChange={() => dispatch(markTodoResolved(todo))}
        />
      </TableCell>
      <TableCell>
        {isEdit ? (
          <Input
            type='text'
            value={fieldValue}
            onChange={event => setFieldValue(event.target.value)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => handleSave()}>
                  <Save />
                </IconButton>
              </InputAdornment>
            }
          />
          // <TextField 
          //   value={fieldValue} 
          //   onChange={event => setFieldValue(event.target.value)}
          //   InputProps={{
          //     startAdornment: Adornment
          //   }}
          //  />
          ) : (
          todo.title
        )
        }
      </TableCell>
      <TableCellInline>
        <IconButton onClick={() => setIsEdit(true)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => dispatch(deleteTodo(todo))}>
          <Delete />
        </IconButton>
      </TableCellInline>
    </TableRow>
  )
} 