import { takeEvery, call, put } from "redux-saga/effects";
import {
  SAVE_USER_DATA,
  SAVE_TODOS,
  DELETE_TODO_IN_STORE,
  LOGIN_JWT_CHECK,
} from "../actions";
import {
  signupHandler,
  signinHandler,
  getTodos,
  deleteTodo,
  getMe,
} from "../utils";

function* sighUp(action) {
  const data = yield call(signupHandler, action.payload);
  yield put(SAVE_USER_DATA(data));
  yield getAllTodos();
}

function* sighIn(action) {
  const data = yield call(signinHandler, action.payload);
  yield put(SAVE_USER_DATA(data));
  yield getAllTodos();
}

function* getAllTodos() {
  const data = yield call(getTodos);
  yield put(SAVE_TODOS(data));
}

function* deleteTodoById(action) {
  const res = yield call(deleteTodo, action.payload);

  if (res.data === "Todo was deleted!") {
    yield put(DELETE_TODO_IN_STORE(action.payload));
  }
}

function* loginJwtCheck() {
  if (localStorage.getItem("JWT")) {
    const data = yield call(getMe);
    yield put(SAVE_USER_DATA(data));
  }
}

export default function* rootSaga() {
  yield takeEvery("SIGN_UP", sighUp);
  yield takeEvery("SIGN_IN", sighIn);
  yield takeEvery("GET_TODOS", getAllTodos);
  yield takeEvery("DELETE_TODO", deleteTodoById);
  yield takeEvery("LOGIN_JWT_CHECK", loginJwtCheck);
}
