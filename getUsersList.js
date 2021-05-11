const db = require("./firebase");

exports.getUsersList = async () => {
  console.log("get user list is called");

  const snapshot = await db.collection("users").get();

  console.log("snapshot ", snapshot)
  snapshot.forEach((doc) => {
    console.log(doc.id, "=> ", doc.data());
  });

  let fortyFivePlus = [
    {
      emailId: "sumitbopche01@gmail.com",
      name: "Sumit Bopche",
      ageGroup: 45,
    },
  ];

  let eighteenPlus = [
    {
      emailId: "sumitbopche01@gmail.com",
      name: "Sumit Bopche",
      ageGroup: 45,
    },
  ];

  return { fortyFivePlus, eighteenPlus };
};
