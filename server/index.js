import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is listening on port http://localhost:3000 ");
});




