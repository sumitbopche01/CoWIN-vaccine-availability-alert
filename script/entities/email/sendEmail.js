const { sendEmailNotification } = require("./sendEmailNotification");
const { getUsersList } = require("../../services/getUsersList");
const setNotificationSend = require("../../services/setNotificationSent");

/**
 *
 * @param {String} ageGroup
 * @param {String} districtCode
 * @param {Integer} count
 */
const sendEmail = async (ageGroup, districtCode, count) => {
  let usersList = await getUsersList(ageGroup, districtCode);
  console.log("send email user list", usersList);
  if (usersList.length > 0) {
    usersList.map((user) => {
      let messageData = { ageGroup, count };
      sendEmailNotification(messageData, user.email);
    });

    setNotificationSend(usersList);
    //To Do : Good looking email body
    // let message = `The Vaccine is available in your district for the age group ${ageGroup}+.
    // \n Number of sessions available: ${count}.
    // \n Please book the appointment on https://selfregistration.cowin.gov.in/`;
  }
};

module.exports = sendEmail;
