import { ActionTypes } from "../constants/action-types";

const initialState = {
  selectedDistrict: "",
};

export const districtReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_DISTRICT_CODE:
      return { ...state, selectedDistrict: payload };
    case ActionTypes.REMOVE_SELECTED_DISTRICT_CODE:
      return { ...state, selectedDistrict: "" };
    default:
      return state;
  }
};

