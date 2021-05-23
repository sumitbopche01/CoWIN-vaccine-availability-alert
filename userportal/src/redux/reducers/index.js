import { combineReducers } from "redux";
import { districtReducer } from "./userReducer";

const reducers = combineReducers({
  district: districtReducer,
});

export default reducers;
