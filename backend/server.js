const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const maskRouter = require("./routes/mask");
app.use("/mask", maskRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));
