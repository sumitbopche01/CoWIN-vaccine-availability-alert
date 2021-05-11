const getData = require("./getData");
const { getUsersList } = require("./getUsersList");
const { sendEmailNotification } = require("./sendEmailNotification");
const { addUser } = require("./addUser");
const firebase = require("./firebase");

const checkVaccineAvailability = async () => {
  try {
    let sessionsList = (await getData()).sessions;
    let fortyFivePlusCenters = [],
      eighteenPlus = [];

    sessionsList.map((session) => {
      if (session.min_age_limit == 18) {
        eighteenPlus.push(session);
      } else if (session.min_age_limit == 45) {
        fortyFivePlusCenters.push(session);
      }
    });

    console.log(fortyFivePlusCenters.length, eighteenPlus.length);

    if (fortyFivePlusCenters.length > 0) {
      sendEmailNotification("sumitbopche01@gmail.com");
    }

    addUser();
    getUsersList();
  } catch (e) {
    console.log("Error ", e);
  }
};

module.exports = checkVaccineAvailability;

checkVaccineAvailability();
