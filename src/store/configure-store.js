import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index'

const middleWare = [];
const store = createStore(rootReducer);

export default store;
