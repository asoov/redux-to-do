import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo'
const preloadedState = {}

export const store = configureStore({
    preloadedState,
    reducer: {
        todo: todoReducer
    }
})