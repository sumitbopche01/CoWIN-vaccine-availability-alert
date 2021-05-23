import { combineReducers } from "redux";
import { districtReducer } from "./userReducer";

const reducers = combineReducers({
  districtCode: districtReducer,
});

export default reducers;
