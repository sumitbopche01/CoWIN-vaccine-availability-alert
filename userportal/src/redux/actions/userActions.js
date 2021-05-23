import { ActionTypes } from "../constants/action-types";

export const selectedDistrictCode = (districtCode) => {
  return {
    type: ActionTypes.SET_SELECTED_DISTRICT_CODE,
    payload: districtCode,
  };
};

