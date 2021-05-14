const { addUser } = require("../entities/users/addUser");

const AddUser = async (req, res) => {
  let data = req.body;
  let response = await addUser(data);
  console.log(response);
  return res.send(response);
};

module.exports = { AddUser };
