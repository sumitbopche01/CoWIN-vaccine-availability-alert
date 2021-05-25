const getCurrentAvailableCenters = require("../entities/availability/getCurrentAvailableCenters");

const AvailableCenters = async (req, res) => {
  let { ageGroup, districtCode, vaccineName, feeType, doseNo } = req.params;

  if (!ageGroup || !districtCode || !vaccineName || !feeType || !doseNo) {
    return res.send({
      status: false,
      data: null,
      message: "Please provide all the required fields.",
    });
  }

  let resData = await getCurrentAvailableCenters(req.params);
  return res.send(resData);
};

module.exports = AvailableCenters;
