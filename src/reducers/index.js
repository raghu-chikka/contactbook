import { contactReducer } from "./reducer";
import { combineReducers } from "redux";

export default combineReducers({
  contact: contactReducer,
});
