import { combineReducers } from "redux";
import authReducer from "./auth";
import productReducer from "./products";

export default combineReducers({
  products: productReducer,
  auth: authReducer,
});
