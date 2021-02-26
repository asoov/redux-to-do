export type TodoState = {
  todos: TodoItem[]
}
export type TodoItem = {
  id: any
  userId: number
  title: string
  completed: boolean
}