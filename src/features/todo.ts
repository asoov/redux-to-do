import { createSlice, Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { TodoItem, TodoState } from './todo.types'


const initialState: TodoState = {
    todos: []
}

const todo = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
      addTodo: (state, action) => {
        console.log(action.payload)
        state.todos = [
          action.payload,
          ...state.todos
        ]
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
      },

      editTodo: (state, action) => {
        console.log(state, action)
        const todoMatchIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
        console.log(todoMatchIndex)
        state.todos[todoMatchIndex].title = action.payload.title
      },

      resolveTodoById: (state, action) => {
        state.todos = state.todos.map(todo => {
          if(todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })
      },
      setTodo: (state, action) => {
        console.log('reducer')
        state.todos = [
          ...state.todos,
          ...action.payload
          ]
        }
      }
    
})

export const fetchTodos = (amount:number = 10) => async (dispatch: Dispatch) => {
  try {
    console.log('action')
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${amount}`)
    console.log(data)
    dispatch(setTodo(data))
  }
  catch(error) {
    console.log(error)
  }
}

export const addSingleTodo = (todo: TodoItem) => async (dispatch: Dispatch) => {
  console.log(todo)
  try {
    await axios.post('https://jsonplaceholder.typicode.com/todos', todo)
    dispatch(addTodo(todo))
  }
  catch(error) {
    console.log(error)
  }
}

export const editSingleTodo = (id: any, title: string) => async (dispatch: Dispatch) => {
  console.log(todo)
  try {
    const { data } = await axios.patch('https://jsonplaceholder.typicode.com/todos/1', {id, title})
    console.log(data)
    dispatch(editTodo(data))
  }
  catch(error) {
    console.log(error)
  }
}

export const deleteTodo = (todo: TodoItem) => async (dispatch: Dispatch) => {
  try {
    const { id } = todo
    axios.delete('https://jsonplaceholder.typicode.com/todos/1', {data: todo})
    dispatch(removeTodo(id))
  }
  catch(error) {
    console.log(error)
  }
}

export const markTodoResolved = (todo: TodoItem) => async (dispatch: Dispatch) => {
  const { id } = todo
  try {
    const { data } = await axios.patch('https://jsonplaceholder.typicode.com/todos/1', {id})
    dispatch(resolveTodoById(data.id))
  }
  catch(error) {
    console.log(error)
  }
}

export const selectTodos = (state: any)  => state.todo.todos

export const {
  setTodo,
  addTodo,
  resolveTodoById,
  removeTodo,
  editTodo
} = todo.actions

export default todo.reducer