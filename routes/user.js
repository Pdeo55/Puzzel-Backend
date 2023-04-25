const express = require("express");
const {addUser} = require('../controllers/User.js/register');
const{login}= require("../controllers/User.js/login")

const UserRouter = express.Router();

UserRouter.post("/login", login);
UserRouter.post("/register", addUser);

module.exports = UserRouter;
