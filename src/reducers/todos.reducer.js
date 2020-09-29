import {
    ADD_TODO, GET_CURRENT_TODO,
    EDIT_CURRENT_TODO,
    REMOVE_CURRENT_TODO,
    SEARCH_TODOS,
    FILTER_TODOS
} from '../actoins/types'

const initialState = {
    list: [{ "body": "1", "id": 4694, "status": "Active" }, { "body": "2", "id": 1603, "status": "Active" }, { "body": "3", "id": 3053, "status": "Active" }, { "body": "11", "id": 2382, "status": "Active" }],
    current: null,
    listSearch: [],
    listFilterByStatus: []
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
        case SEARCH_TODOS: {
            const text = action.text
            var matchedTodos = state.list.filter((todo) => {
                return todo.body.toLowerCase().indexOf(text.toLowerCase()) !== -1;
            })
            return {
                ...state,
                listSearch: matchedTodos
            }
        }
        case FILTER_TODOS: {
            return {
                ...state,
                list: newList,
            }
        }
        default:
            return state
    }

}

export default todosReducer;