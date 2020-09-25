import {
    ADD_TODO, GET_CURRENT_TODO,
    EDIT_CURRENT_TODO,
    REMOVE_CURRENT_TODO,
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
