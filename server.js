const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoutes.js");
const usersRoute = require("./routes/userRoutes.js");
const hotelsRoute = require("./routes/hotelRoutes.js");
const roomsRoute = require("./routes/bookingRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api", authRoute);  //works good
app.use("/api", usersRoute);  //works good
app.use("/api", hotelsRoute);
app.use("/api", roomsRoute); 

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);