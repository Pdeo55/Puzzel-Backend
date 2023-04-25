const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const addUser = async (req, res) => {
  const { name,email, password} = req.body;
  if (!(email && password && name)) {
    res.status(400).json("All input is required");
  }
  try {

    const olduser=await User.findOne({email});
    if(olduser){
      return res.status(409).json("User Already Exist. Please Login")
    }

    encryptedpass =await bcrypt.hash(password,10);
    const adduser = await User.create({
      name,
      email:email.toLowerCase(),
      password:encryptedpass,
    
    });

    const token = jwt.sign(
      { user_id: adduser._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    adduser.token = token;
    res.status(200).json(adduser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {addUser};
