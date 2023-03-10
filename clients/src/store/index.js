import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "../reducer/todo";
import { userReducer } from "../reducer/user";
import { categoryReducer } from "../reducer/category";

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
  categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
