// DEPENDENCIES
const cors = require("cors");
const express = require("express");

//IMPORT QUERIES
const { testQuery } = require("./queries/testQuery");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
//async, so we can use query correctly
app.get("/", async (req, res) => {
  //use query function to get data from db
  const exampleData = await testQuery();
  res.send(exampleData.name);
});

// EXPORT
module.exports = app;
