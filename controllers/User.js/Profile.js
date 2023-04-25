const Profile = require("../../models/profile");
const moment = require("moment");


const addProfile = async (req, res) => {
  const { check_in_time, check_out_time, user_id, accuracy } = req?.body;


  const getDuration = (check_in_time, check_out_time, unit = "minutes") => {
    return moment(check_out_time).diff(moment(check_in_time), unit);
  };

  let duration = 0;
  if (check_in_time && check_out_time) {
    duration = getDuration(check_in_time, check_out_time);
  }

  try {
    const Details = await Profile.create({
      check_in_time,
      check_out_time,
      user_id,
      duration:duration,
      accuracy:accuracy,
    });

    console.log(Details);
    res.status(200).json(Details);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserDetails = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const Details = await Profile.findOne({user_id:id});

    // console.log(Profile);
    res.status(200).json(Details);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUserDetails, addProfile };
