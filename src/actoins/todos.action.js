import {
    ADD_TODO, GET_CURRENT_TODO,
    EDIT_CURRENT_TODO,
    REMOVE_CURRENT_TODO,
    SEARCH_TODOS,
    FILTER_TODOS
} from '../actoins/types'

export const addNewTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const getCurrentTodo = (todo) => {
    return {
        type: GET_CURRENT_TODO,
        current: todo
    }
}

export const editCurrentTodo = (todo, index) => {
    return {
        type: EDIT_CURRENT_TODO,
        todo: todo,
        index: index
    }
}

export const removeCurrentTodo = (index) => {
    return {
        type: REMOVE_CURRENT_TODO,
        index: index
    }
}

export const searchTodos = (text) => {
    return {
        type: SEARCH_TODOS,
        text: text
    }
}

export const filterTodos = (status) => {
    return {
        type: FILTER_TODOS,
        status: status
    }
}
