const express = require("express");
const Router = express.Router();

const {signup , signin} = require("../controllers/Auth");

Router.post("/signup",signup);
Router.post("/signin",signin);

module.exports = Router;    