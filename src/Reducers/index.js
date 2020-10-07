import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
  Auth: AuthReducer,
  Errors: ErrorReducer,
});
