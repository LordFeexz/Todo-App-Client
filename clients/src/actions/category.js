import { FETCH_CATEGORY_SUCCESS } from "../types";

const url = `http://localhost:3001`;

export const fetchCategory = () => async (dispatch) => {
  try {
    const resp = await fetch(`${url}/category/`);
    if (!resp.ok) throw new Error("error fetch category");
    const data = await resp.json();
    dispatch(fetchCategorySuccess(data));
    return data;
  } catch (err) {
    return err;
  }
};

export const fetchCategorySuccess = (payload) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload,
  };
};

export const addCategory = (name) => async (dispatch, getState) => {
  try {
    if (name === "") throw new Error("invalid category name input");
    const { userReducer, categoryReducer } = getState();
    const resp = await fetch(`${url}/category/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        access_token: userReducer,
      },
      body: JSON.stringify(name),
    });

    if (!resp.ok) throw new Error("error add category");

    categoryReducer.Categories.push(name);

    dispatch(fetchCategorySuccess(categoryReducer.Categories));

    return resp.json();
  } catch (err) {
    return err;
  }
};
