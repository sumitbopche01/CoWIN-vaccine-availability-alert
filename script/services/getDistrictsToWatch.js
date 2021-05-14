const db = require("../firebase");

exports.getDistrictsToWatch = async () => {
  let districtList = [];
  const snapshot = await db.collection("districtsToWatch").get();
  snapshot.forEach((doc) => {
    districtList.push({ id: doc.id, ...doc.data() });
  });
  return districtList;
};
