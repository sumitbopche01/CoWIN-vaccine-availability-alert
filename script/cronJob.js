const cron = require("node-cron");

const checkVaccineAvailability = require("./checkVaccineAvailability");

cron.schedule("* * * * *", () => {
  console.log("cron called ");
  checkVaccineAvailability()
});
