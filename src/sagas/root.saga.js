import { call } from 'redux-saga/effects'
import { watchFetchTodos } from './todos.saga'

function* rootSaga() {
    yield call(watchFetchTodos)
}

export default rootSaga