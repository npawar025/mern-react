import express from "express";
import dotenv from "dotenv";
import router from "./route/trainRoute.js";
import connectDB from "./db/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON body data
app.use(express.json());
app.use("/api/train", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();