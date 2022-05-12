// DEPENDENCIES
const cors = require("cors");
const express = require("express");

//IMPORT QUERIES
const { testQuery } = require("./queries/testQuery");
const projectsControllers = require("./controllers/projectControllers");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.use("/projects", projectsControllers);
//async, so we can use query correctly
app.get("/", async (req, res) => {
  //use query function to get data from db
  const exampleData = await testQuery();
  res.send(exampleData.name);
});

// EXPORT
module.exports = app;
