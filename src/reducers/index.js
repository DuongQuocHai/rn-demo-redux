import { combineReducers } from 'redux'
import todosReducer from './todos.reducer';
import loadingReducer from './loading.reducer';
import errorReducer from './error.reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
    isLoading: loadingReducer, 
    error: errorReducer
});
export default rootReducer