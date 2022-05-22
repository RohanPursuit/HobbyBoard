const express = require("express");
const connections = express();
const {
  joinRequest,
  deleteRequest,
  getAllProjectConnections,
} = require("../queries/connectionsQueries");

//Send join request
connections.post("/", async (request, response) => {
  console.log("Post /connections");
  const pending = await joinRequest(request.body);
  response.status(200).json(pending);
});

connections.delete("/", async (request, response) => {
  console.log("delete /connections");
  const removeConnection = await deleteRequest(request.body);
  response.status(200).json(removeConnection);
});

connections.get("/", async (request, response) => {
  console.log("get /connections");
  const projectConnections = await getAllProjectConnections(request.body);
  response.status(200).json(projectConnections);
});

module.exports = connections;
