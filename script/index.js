const express = require("express");
const cors = require("cors");
const startCronJob = require("./cronJob");

const dotenv = require("dotenv");
const { AddUser } = require("./controllers/users");
const AvailableCenters = require("./controllers/availableCenters");

const app = express();
dotenv.config();
const port = process.env.PORT;

//Middlewares
app.use(express.json()); // for json object in post request body
app.use(cors()); // cors request

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post(`/user`, AddUser);

app.get(`/availablecenters`, AvailableCenters);

app.listen(port, () => {
  console.log("Listening on port ", port);
});

startCronJob();
