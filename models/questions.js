const mongoose = require("mongoose");


const QuestionSchema = new mongoose.Schema(
  {
    Banner:"String",
    Question: "String",
    Ans: "String",
    clu1: "Object",
    clu2: "Object",
    clu3: "Object",
    clu4: "Object",
    clu5: "Object",
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
