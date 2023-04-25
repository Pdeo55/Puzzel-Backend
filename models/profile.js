const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user_id:"String",
    accuracy:"String",
    date: Date,
    check_in_time: Date,
    check_out_time: Date,
    duration: { type: Number, default: 0 },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
