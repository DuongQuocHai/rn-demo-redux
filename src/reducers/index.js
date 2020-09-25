import { combineReducers } from 'redux'
import currentTodoReducer from './currentTodo.reducer';
import hobbyReducer from './hobby.reducer'
import todosReducer from './todos.reducer';

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    todos: todosReducer,
    currentTodo: currentTodoReducer,
});
export default rootReducer