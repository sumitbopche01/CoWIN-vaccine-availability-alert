const getData = require("../../services/getData");
const sendEmail = require("../email/sendEmail");
/**
 *
 * @param {String} districtCode ex 21 Gondia
 */
const checkVaccineAvailability = async (districtCode) => {
  try {
    let eighteenPlusCount = 0,
      fortyFivePlusCount = 0;
    //get Data from cowin api
    let calenderVaccineData = await getData(districtCode);
    calenderVaccineData.centers.map((center) => {
      center.sessions.map((session) => {
        if (session.min_age_limit == 18 && session.available_capacity > 0) {
          eighteenPlusCount++;
        } else if (
          session.min_age_limit == 45 &&
          session.available_capacity > 0
        ) {
          fortyFivePlusCount++;
        }
      });
    });

    console.log("45+: ", fortyFivePlusCount, " || 18+: ", eighteenPlusCount);

    if (fortyFivePlusCount > 0) {
      sendEmail("45", districtCode, fortyFivePlusCount);
    }
    if (eighteenPlusCount > 0) {
      sendEmail("18", districtCode, eighteenPlusCount);
    }
  } catch (e) {
    console.log("Error ", e);
    //send slack alert
    //to do
  }
};

module.exports = checkVaccineAvailability;
