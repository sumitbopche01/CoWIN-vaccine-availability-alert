import { ActionTypes } from "../constants/action-types";

const initialState = {
  districtCode: "",
};

export const districtReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_DISTRICT_CODE:
      return { ...state, districtCode: payload };
    case ActionTypes.REMOVE_SELECTED_DISTRICT_CODE:
      return { ...state, districtCode: "" };
    default:
      return state;
  }
};
