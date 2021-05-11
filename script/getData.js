var https = require("follow-redirects").https;

// "/api/v2/appointment/sessions/public/findByPin?pincode=441601&date=11-05-2021",

const getData = () => {
  return new Promise((resolve, reject) => {
    let today = new Date();
    let dateString =
      (today.getDate() + 1) + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
    console.log(dateString);
    let options = {
      method: "GET",
      hostname: "cdn-api.co-vin.in",
      path:
        "/api/v2/appointment/sessions/public/findByDistrict?district_id=378&date="+dateString,
      headers: {},
      maxRedirects: 20,
    };

    var req = https.request(options, function (res) {
      console.log("inside https");
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        // console.log(body.toString());
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