import { LOGIN_SUCCESS } from "../types";

const initialState = { Users: {} };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return (state.Users.accessToken = action.accessToken);

    default:
      return state;
  }
};
