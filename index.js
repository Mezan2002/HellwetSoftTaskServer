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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2ahck7i.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// collections start

const addedTasksCollection = client.db("todoAppDBUser").collection("tasks");

// collections end

const run = async () => {
  try {
    // store the tasks API start
    app.post("/addTask", async (req, res) => {
      const taskData = req.body;
      const result = await addedTasksCollection.insertOne(taskData);
      res.send(result);
    });
    // store the tasks API end
  } finally {
    console.log();
  }
};

run().catch((e) => console.log(e));

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

// todoAppDBUser
// cHA0AcDuexwvyQD6
