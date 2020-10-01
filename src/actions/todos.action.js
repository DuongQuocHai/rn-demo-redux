import { TODOS } from './types'

const fetchTodosList = () => ({
    type: TODOS.LOAD,
})
const addTodo = (newTodo) => {
    return {
        type: TODOS.ADD,
        newTodo
    }
}
const fetchSuccess = todos => ({
    type: TODOS.LOAD_SUCCESS,
    todos
})
const fetchError = error => ({
    type: TODOS.LOAD_FAIL,
    error
})

export { fetchTodosList, addTodo, fetchSuccess, fetchError };