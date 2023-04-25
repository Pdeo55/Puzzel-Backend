
const express = require("express");
const {addProfile,getUserDetails} = require('../controllers/User.js/Profile');
// const{login}= require("../controllers/Profile.js/login")

const ProfileRouter = express.Router();

ProfileRouter.get("/getUserDetails/:id", getUserDetails );
ProfileRouter.post("/addprofile", addProfile);

module.exports = ProfileRouter;
