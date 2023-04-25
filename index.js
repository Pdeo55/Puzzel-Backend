require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const UserRouter = require("./routes/user");
const ProfileRouter = require("./routes/profile");
const DashboardRouter = require("./routes/dashboard");
const PORT = process.env.PORT || 8000;    
const app = express();

const date = new Date()

app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    })
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", UserRouter);
app.use("/api/profile", ProfileRouter);
app.use("/api/dashboard", DashboardRouter);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
mongoose
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongodb connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
