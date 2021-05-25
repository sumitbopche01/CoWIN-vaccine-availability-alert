const getData = require("../../services/getData");

/**
 *
 * @param {String} data
 */
const getCurrentAvailableCenters = async (data) => {
  try {
    let { ageGroup, districtCode, vaccineName, feeType, doseNo } = data;
    let calenderVaccineData = await getData(districtCode);
    let doseFilter = "available_capacity_dose1";
    if (doseNo == 2) {
      doseFilter = "available_capacity_dose2";
    }

    calenderVaccineData.centers.map((center) => {
      center.sessions.filter(
        (session) =>
          session.min_age_limit == ageGroup &&
          session.vaccine == vaccineName &&
          session[doseFilter] > 0
      );
    });

    calenderVaccineData.centers.filter((center) => center.sessions.length > 0);

    let responseObj = {
      status: true,
      data: calenderVaccineData,
      message: null,
    };
    return responseObj;
  } catch (e) {
    console.log("Error ", e);
    //send slack alert
    //to do
    let responseObj = {
      status: false,
      data: null,
      message: "Something went wrong. Please try again later.",
    };
    return responseObj;
  }
};

module.exports = getCurrentAvailableCenters;
