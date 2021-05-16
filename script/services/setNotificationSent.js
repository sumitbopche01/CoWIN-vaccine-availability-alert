const db = require("../firebase");

const setNotificationSent = (usersList) => {
  usersList.map(async (user) => {
    const userRef = db.collection("users").doc(user.id);
    userRef.update({ isNotified: true, noOfNotification: user.noOfNotification + 1 });
  });
};

module.exports = setNotificationSent;
