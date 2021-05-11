const getData = require("./getData");
// const { getUsersList } = require("./getUsersList");
const { sendEmailNotification } = require("./sendEmailNotification");
// const { addUser } = require("./addUser");
// const firebase = require("./firebase");

const checkVaccineAvailability = async () => {
  try {
    let [sessionsListToday, sessionsListTomorrow] = await Promise.all([
      getData("today"),
      getData("tomorrow"),
    ]);

    sessionsListToday = sessionsListToday.sessions;
    sessionsListTomorrow = sessionsListTomorrow.sessions;

    let fortyFivePlusCenters = [],
      eighteenPlus = [];

    sessionsListToday.map((session) => {
      if (session.min_age_limit == 18) {
        eighteenPlus.push(session);
      } else if (session.min_age_limit == 45) {
        fortyFivePlusCenters.push(session);
      }
    });

    sessionsListTomorrow.map((session) => {
      if (session.min_age_limit == 18) {
        eighteenPlus.push(session);
      } else if (session.min_age_limit == 45) {
        fortyFivePlusCenters.push(session);
      }
    });

    console.log(
      "45+: ",
      fortyFivePlusCenters.length,
      " || 18+: ",
      eighteenPlus.length
    );

    if (fortyFivePlusCenters.length > 0) {
      sendEmailNotification("sumitbopche01@gmail.com");
    }

    // addUser();
    // getUsersList();
  } catch (e) {
    console.log("Error ", e);
  }
};

module.exports = checkVaccineAvailability;

checkVaccineAvailability();
