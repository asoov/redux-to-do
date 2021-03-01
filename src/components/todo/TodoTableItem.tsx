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

const StyledInput = styled(Input)({
  width: '100%'
})

const StretchCell = styled(TableCell)({
  width: '100%'
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
      <StretchCell>
        {isEdit ? (
          <StyledInput
            type='text'
            value={fieldValue}
            onChange={event => setFieldValue(event.target.value)}
            onKeyUp={event => event.code === 'Enter' && handleSave()}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => handleSave()}>
                  <Save />
                </IconButton>
              </InputAdornment>
            }
          />
          ) : (
            <p onClick={() => setIsEdit(!isEdit)}>
              {todo.title}
            </p>
        )
        }
      </StretchCell>
      <TableCellInline>
        <IconButton onClick={() => setIsEdit(!isEdit)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => dispatch(deleteTodo(todo))}>
          <Delete />
        </IconButton>
      </TableCellInline>
    </TableRow>
  )
} 