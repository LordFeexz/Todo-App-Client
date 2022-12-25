import { FETCH_TODO_SUCCESS } from "../types";
import axios from "axios";
const url = `http://localhost:3001`;

export const fetchTodo = () => async (dispatch, getState) => {
  try {
    const { userReducer } = getState();
    const resp = await fetch(`${url}/todo/`, {
      headers: {
        "Content-Type": "application/json",
        access_token: userReducer,
      },
    });
    if (!resp.ok) throw new Error("error fetch data");
    const data = await resp.json();
    dispatch(fetchTodoSuccess(data));
    return data;
  } catch (err) {
    return err;
  }
};

export const fetchTodoSuccess = (payload) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload,
  };
};

export const addTodo = (payload) => async (dispatch, getState) => {
  try {
    const { userReducer, todoReducer } = getState();
    const { data } = await axios({
      method: "post",
      url: `${url}/todo/`,
      headers: {
        access_token: userReducer,
      },
      data: {
        name: payload.name,
      },
    });

    todoReducer.Todos.push(payload);

    dispatch(fetchTodoSuccess(todoReducer.Todos));

    return data;
  } catch (err) {
    return err;
  }
};

export const completeTodo = (id) => async (dispatch, getState) => {
  try {
    const index = getState();
    const { data } = await axios({
      method: "patch",
      url: `${url}/todo/${id}`,
      headers: {
        access_token: index.userReducer,
      },
    });

    dispatch(fetchTodoSuccess(data));

    return data;
  } catch (err) {
    return err;
  }
};

export const addTodoCategory =
  (id, CategoryId) => async (dispatch, getState) => {
    try {
      const { userReducer } = getState();
      const { data } = await axios({
        method: "patch",
        url: `${url}/todo/category/${id}`,
        headers: {
          access_token: userReducer,
        },
        data: {
          CategoryId,
        },
      });

      dispatch(fetchTodo());

      return data;
    } catch (err) {
      return err;
    }
  };
