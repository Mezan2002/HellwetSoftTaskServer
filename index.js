// requires start
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
// requires end

// middlewears start
app.use(cors());
app.use(express.json());
// middlewears end

// default page API start
app.get("/", (req, res) => {
  res.send("Hellwet Soft Task Server");
});
// default page API end

// listen the server API start
app.listen(port, () => {
  console.log(`Hellwet Soft Task Server is Running on ${port}`);
});
// listen the server API end
