import { createAction } from "redux-act";

export const SIGN_UP = createAction("SIGN_UP");

export const SIGN_IN = createAction("SIGN_IN");

export const SAVE_USER_DATA = createAction("SAVE_USER_DATA");

export const LOG_OUT = createAction("LOG_OUT");

export const GET_TODOS = createAction("GET_TODOS");

export const SAVE_TODOS = createAction("SAVE_TODOS");

export const DELETE_TODO = createAction("DELETE_TODO");

export const DELETE_TODO_IN_STORE = createAction("DELETE_TODO_IN_STORE");

export const LOGIN_JWT_CHECK = createAction("LOGIN_JWT_CHECK");
