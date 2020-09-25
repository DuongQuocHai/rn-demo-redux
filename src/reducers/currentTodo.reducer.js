const initialState = {
    current: null,
}

const currentTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURRENT_TODO': {
            const currentTodo = action.currentTodo
            return {
                current: currentTodo
            }
        }
        default:
            return state;
    }
}

export default currentTodoReducer;