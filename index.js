import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://suiratsasha:Tarius06@cluster0.icrv7gv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

app.use(express.json());
app.use("/api", router);

async function startServer() {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

startServer();
