var https = require("follow-redirects").https;

/**
 * 
 * @param {String} district_code 
 * @returns 
 */
const getData = (district_code) => {
  return new Promise((resolve, reject) => {
    let today = new Date();
    let dateString =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    let options = {
      method: "GET",
      hostname: "cdn-api.co-vin.in",
      path: `/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_code}&date=${dateString}`,
      headers: {},
      maxRedirects: 20,
    };

    var req = https.request(options, function (res) {
      var chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        return resolve(JSON.parse(body.toString()));
      });
      res.on("error", function (error) {
        console.error(error);
        return reject(error);
      });
    });
    req.end();
  });
};

module.exports = getData;
