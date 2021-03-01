import { Button, Container, styled, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { addSingleTodo } from '../../features/todo'
import {v4 as uuidv4} from 'uuid'
import { TodoItem } from '../../features/todo.types'
import { useDispatch } from 'react-redux'

const InputWrapper = styled(Container)({
  width: '100%',
  display: 'flex'
})

const InputField = styled(TextField)({
  flexGrow: 1,
  marginRight: '24px'
})

export const TodoInput: React.FC = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const newTodo: TodoItem = {
    title: input,
    userId: 1,
    id: uuidv4(),
    completed: false
  }
  return (
    <InputWrapper>
      <InputField 
        label='Add Todo' 
        value={input}
        onChange={event => setInput(event.target.value)} 
        onKeyDown={event => {
          event.code === 'Enter' && dispatch(addSingleTodo(newTodo)) && setInput('')
        }}
      /> 
      <Button 
        variant='contained' 
        disabled={!input.length} 
        color='primary' 
        onClick={() => {
          dispatch(addSingleTodo(newTodo))
          setInput('')
        }}>
        Add Todo
      </Button>
    </InputWrapper>
  )
} 