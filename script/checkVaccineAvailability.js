const getData = require("./getData");
// const { getUsersList } = require("./getUsersList");
const { sendEmailNotification } = require("./sendEmailNotification");
// const { addUser } = require("./addUser");
// const firebase = require("./firebase");

const checkVaccineAvailability = async () => {
  try {
    let fortyFivePlusCenters = [],
      eighteenPlusCenters = [],
      eighteenPlusCount = 0,
      fortyFivePlusCount = 0;

    // let [sessionsListToday, sessionsListTomorrow] = await Promise.all([
    //   getData("today"),
    //   getData("tomorrow"),
    // ]);

    // sessionsListToday = sessionsListToday.sessions;
    // sessionsListTomorrow = sessionsListTomorrow.sessions;

    let districtCode = "378";
    let calenderVaccineData = await getData(districtCode);

    calenderVaccineData.centers.map((center) => {
      center.sessions.map((session) => {
        console.log(session);
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

    // sessionsListToday.map((session) => {
    //   if (session.min_age_limit == 18) {
    //     eighteenPlus.push(session);
    //   } else if (session.min_age_limit == 45) {
    //     fortyFivePlusCenters.push(session);
    //   }
    // });

    // sessionsListTomorrow.map((session) => {
    //   if (session.min_age_limit == 18) {
    //     eighteenPlus.push(session);
    //   } else if (session.min_age_limit == 45) {
    //     fortyFivePlusCenters.push(session);
    //   }
    // });

    console.log("45+: ", fortyFivePlusCount, " || 18+: ", eighteenPlusCount);

    if (fortyFivePlusCount > 0) {
      sendEmailNotification("sumitbopche01@gmail.com");
    }

    // addUser();
    // getUsersList();
  } catch (e) {
    console.log("Error ", e);
  }
};

module.exports = checkVaccineAvailability;

// checkVaccineAvailability();
