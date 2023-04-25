const Profile = require("../../models/profile");

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