import { createReducer } from "redux-act";
import {
  SAVE_USER_DATA,
  LOG_OUT,
  SAVE_TODOS,
  DELETE_TODO_IN_STORE,
} from "../actions";

const initialState = () => ({
  currentUser: { name: "Guest" },
  JWT: null,
  isLoggedIn: false,
  todos: [],
});

const reducer = createReducer(
  {
    [SAVE_USER_DATA]: (store, payload) => {
      if (!payload) {
        return store;
      }
      return {
        ...store,
        currentUser: payload.data.user,
        JWT: payload.data.token,
        isLoggedIn: true,
      };
    },
    [LOG_OUT]: (store) => {
      localStorage.removeItem("JWT");
      return {
        ...store,
        currentUser: { name: "Guest" },
        JWT: null,
        isLoggedIn: false,
        todos: [],
      };
    },
    [SAVE_TODOS]: (store, payload) => {
      if (!payload) {
        return store;
      }

      return {
        ...store,
        todos: [...payload.data],
      };
    },
    [DELETE_TODO_IN_STORE]: (store, payload) => {
      console.log("DELETE IN REDUCER", payload);
      const todos = store.todos.filter((todo) => todo.todo_id !== payload);
      return {
        ...store,
        todos: [...todos],
      };
    },
  },
  initialState()
);

export default reducer;
