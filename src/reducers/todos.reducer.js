import { TODOS } from "../actions/types";

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case TODOS.LOAD_SUCCESS:
            return action.todos;
        case TODOS.LOAD_FAIL:
            return [];
        case TODOS.ADD:
            return [...state, action.newTodo];
        default:
            return state;
    }
};

export default todosReducer;