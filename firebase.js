const admin = require("firebase-admin");

console.log("firebase getting initialized");
const serviceAccount = require("./cowin-vaccine-alert-firebase-adminsdk-hklp8-7d1026d97c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
