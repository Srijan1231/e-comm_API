import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
//middlewares
import cors from "cors";
import morgan from "morgan";

app.use(cors());
app.use(morgan("dev"));
//mongoconnect
import { mongoConnect } from "./src/config/mongoConfig.js";
mongoConnect();
// main server routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is live",
  });
});

// other routes

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running on PORT:http://localhost:${PORT}`);
});
