import hobbyReducer from './hobby.reducer'
import userReducer from './user.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    use: userReducer
});
export default rootReducer