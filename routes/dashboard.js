

const express = require("express");
const { addQuestions,getAllQuestions} = require('../controllers/Dashboard.js/questions');


const DashboardRouter = express.Router();

DashboardRouter.get("/getAllQuestions", getAllQuestions);
DashboardRouter.post("/addQuestions",  addQuestions);

module.exports = DashboardRouter;
