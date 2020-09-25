import {
    ADD_TODO, GET_CURRENT_TODO,
    EDIT_CURRENT_TODO,
    REMOVE_CURRENT_TODO,
    CHANGE_STATUS_CURRENT_TODO
} from '../actoins/types'

const initialState = {
    list: [],
    current: null,
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const newList = [...state.list]
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            }
        }
        case GET_CURRENT_TODO: {
            const currentTodo = action.current
            return {
                ...state,
                current: currentTodo
            }
        }
        case EDIT_CURRENT_TODO: {
            const newList = [...state.list]
            const todo = action.todo
            const index = action.index
            newList[index] = todo
            return {
                ...state,
                list: newList
            }
        }
        case REMOVE_CURRENT_TODO: {
            const newList = [...state.list]
            const index = action.index
            newList.splice(index, 1);
            return {
                ...state,
                list: newList
            }
        }
        default:
            return state
    }

}

export default todosReducer;