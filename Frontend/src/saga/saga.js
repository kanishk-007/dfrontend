import { takeLatest, put, call } from "redux-saga/effects"
import { fetchError, fetchData, fetchTokenSuccess, fetchMessage } from "../redux/action"
import { FETCH_DATA_START, FETCH_TOKEN_GENERATE, FETCH_USER_GENERATE } from "../redux/type"
import { apiCall, tokenApi, signUpApi } from "../services/services"

function* userDataWatcher() {
  yield takeLatest(FETCH_DATA_START, fetchUserDataWorker)
  yield takeLatest(FETCH_TOKEN_GENERATE, tokenDataWorker)
  yield takeLatest(FETCH_USER_GENERATE, userDataWorker)
}

function* fetchUserDataWorker() {
  try {
    const response = yield call(apiCall)
    yield put(fetchData(response))
    console.log(response);
  } catch (error) {
    yield put(fetchError(error.message))
  }
}

function* tokenDataWorker(action) {
  try {
    const response = yield call(tokenApi, action.payload)
    yield put(fetchMessage(response.data.message))
    yield put(fetchTokenSuccess(response.data))
  } catch (error) {
    yield put(fetchError(error.response.data.message))
  }
}

function* userDataWorker(action) {
  try {
    console.log(action.payload);
    const response = yield call(signUpApi, action.payload)
    yield put(fetchMessage(response.data.message))
  } catch (error) {
    yield put(fetchError(error.response.data.message))
  }
}

export default userDataWatcher