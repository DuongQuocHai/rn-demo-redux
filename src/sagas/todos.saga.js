import { TODOS } from '../actions/types'
import { call, put, takeLatest } from 'redux-saga/effects';
import { getList } from '../shares/services/todos.api';
import { fetchError, fetchSuccess, fetchTodosList } from '../actions/todos.action';
function* fetchTodos() {
    try {
        const res = yield call(getList);
        if (res.status === 200) {
            yield put(fetchSuccess(res));
        } else {
            yield put(fetchError(res.status));
        }
    } catch (error) {
        yield put(fetchError(error))
    }
}

export function* watchFetchTodos() {
    yield takeLatest(fetchTodosList, fetchTodos)
}