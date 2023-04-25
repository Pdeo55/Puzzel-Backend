const Questions = require("../../models/questions");
const { fileUpload } = require("../../utils/fileUpload");
const callBack = require("../../utils/callBack");
const fs = require("fs");

const getAllQuestions = async (req, res) => {
  try {
    const getQuestions = await Questions.find({}).sort({ createdAt: -1 });
    res.status(200).json(getQuestions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addQuestions = async (req, res) => {
  const file = req?.files?.Banner;
  const { Question, Ans, clu1, clu2, clu3, clu4, clu5 } = req?.body;

  console.log(file);

//   const fileContent = fs.readFileSync(file?.tempFilePath);

//   var key = file?.name;
//   const bucket = `${process.env.AWS_BUCKET}/Question`;

//   const mimetype = file?.mimetype;

//   const uploadParams = {
//     bucket: bucket,
//     file: fileContent,
//     key: key,
//     mimetype: mimetype,
//   };
  try {
    // const data = await fileUpload(
    //   uploadParams,
    //   (url) => {
    //     if (url) {
    //       Questions.create({ Banner: url }, callBack(err, response));
    //     }
    //   },
    //   (err) => {
    //     res.status(200).send({ status: "failed", message: err?.message });
    //   }
    // );

    const newQuestions = await Questions.create({
      Question,
      Ans,
      clu1,
      clu2,
      clu3,
      clu4,
      clu5,
    //   Banner: data.Location,
    });
    console.log(newQuestions);
    res.status(200).json(newQuestions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addQuestions, getAllQuestions };
