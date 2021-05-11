const db = require("./firebase");
const firebase = require("firebase");

exports.addUser = async () => {
  console.log("add user got called");
  
  const newUser = db.collection("users").doc();

  let userObject = {
    name: "SB",
    email: "sumitbopche01@gmail.com",
    ageGroup: 18,
    mobileNo: "+919082963332",
    isNotified: false,
    noOfNotification: 0,
    timestamp: new Date(),
    isDeleted: false,
    districtCode: "378",
  };

  await newUser.set(userObject);

  const isDistrictPresent = await db
    .collection("districts")
    .where("districtId", "==", "378")
    .get();

  if (isDistrictPresent._size == 0) {
    const newDistrict = db.collection("districts").doc();
    let districtObj = {
      districtId: "378",
      districtName: "Gondia",
    };
    await newDistrict.set(districtObj);
  }
};
