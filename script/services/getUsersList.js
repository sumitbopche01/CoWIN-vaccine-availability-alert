const db = require("../firebase");

exports.getUsersList = async (ageGroup, districtCode) => {
  let usersList = [];
  const snapshot = await db
    .collection("users")
    .where("ageGroup", "==", ageGroup)
    .where("districtCode", "==", districtCode)
    .where("isNotified", "==", false)
    .get();

  snapshot.forEach((doc) => {
    usersList.push({ id: doc.id, ...doc.data() });
  });
  return usersList;
};
