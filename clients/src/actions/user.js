import { LOGIN_SUCCESS } from "../types";

const url = `http://localhost:3001`;

export const login = (payload) => async (dispatch) => {
  try {
    if (payload.username == "") throw new Error("invalid username");
    if (payload.password == "") throw new Error("invalid password");

    const resp = await fetch(`${url}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) throw new Error("error add");
    const data = await resp.json();
    dispatch(loginSuccess(data));
    return data;
  } catch (err) {
    return err;
  }
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const register = (payload) => async (dispatch) => {
  try {
    if (payload.name == "") throw new Error("invalid input");
    if (payload.username == "") throw new Error("invalid input");
    if (payload.email == "") throw new Error("invalid input");
    if (payload.password == "") throw new Error("invalid input");
    if (payload.role == "") throw new Error("invalid input");

    const resp = await fetch(`${url}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) throw new Error("error register");
    return resp.json();
  } catch (err) {
    return err;
  }
};
