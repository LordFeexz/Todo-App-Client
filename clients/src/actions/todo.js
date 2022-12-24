import { FETCH_TODO_SUCCESS } from "../types";

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
    const resp = await fetch(`${url}/todo/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        access_token: userReducer,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) throw new Error("error add");

    dispatch(fetchTodoSuccess(todoReducer.Todos.push(payload)));

    return resp.json();
  } catch (err) {
    return err;
  }
};

export const completeTodo = (id) => async (dispatch, getState) => {
  try {
    const userReducer = getState();
    const resp = await fetch(`${url}/todo/${id}`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        access_token: userReducer,
        mode: "no-cors",
      },
    });
    if (!resp.ok) throw new Error("error add");
    console.log(resp, "<<<");

    const data = await resp.json();

    dispatch(fetchTodoSuccess(data));

    return resp.json();
  } catch (err) {
    return err;
  }
};
