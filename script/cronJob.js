const cron = require("node-cron");
const { getDistrictsToWatch } = require("./services/getDistrictsToWatch");
const checkVaccineAvailability = require("./entities/availability/checkVaccineAvailability");

const startCronJob = async () => {
  cron.schedule("4 * * * *", async () => {
    let districtsToWatch = await getDistrictsToWatch();
    console.log("cron called ", districtsToWatch);
    districtsToWatch.map((district) => {
      checkVaccineAvailability(district.districtId);
    });
  });
};

module.exports = startCronJob;
