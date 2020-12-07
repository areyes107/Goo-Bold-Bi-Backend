const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("../routes/root");

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/techmart/v1", router);

module.exports = app;
