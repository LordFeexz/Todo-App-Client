import { FETCH_CATEGORY_SUCCESS } from "../types";

const initialState = { Categories: [] };

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        Categories: action.payload,
      };

    default:
      return state;
  }
};
