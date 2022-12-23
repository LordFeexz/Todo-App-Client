import { FETCH_TODO_SUCCESS } from "../types";

const initialState = { Todos: [] };
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        Todos: action.payload,
      };

    default:
      return state;
  }
};
