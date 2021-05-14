const db = require("../../firebase");
const firebase = require("firebase");

exports.addUser = async (data) => {
  console.log("add user got called", data);
  const newUser = db.collection("users").doc();
  let userObject = {
    ...data,
    isNotified: false,
    noOfNotification: 0,
    timestamp: new Date(),
    isDeleted: false,
  };
  await newUser.set(userObject);
  const isDistrictPresent = await db
    .collection("districtsToWatch")
    .where("districtId", "==", userObject.districtCode)
    .get();

  if (isDistrictPresent._size == 0) {
    const newDistrict = db.collection("districtsToWatch").doc();
    let districtObj = {
      districtId: userObject.districtCode,
    };
    await newDistrict.set(districtObj);
  }
};
