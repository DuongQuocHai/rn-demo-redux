const initialState = {
    list: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newList = [...state.list]
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            }
        }
        case 'REMOVE_TODO': {
            return state
        }
        default:
            return state
    }
}

export default todosReducer;