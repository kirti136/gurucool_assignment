require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");
const { requestLogger } = require("./middlewares/requestLogger.middleware.js");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);

app.use("/api/user", routes.userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to GuruCool" });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on ${PORT}`);
});
