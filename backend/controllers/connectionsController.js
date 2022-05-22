const express = require("express");
const connections = express();
const { joinRequest, deleteRequest } = require("../queries/connectionsQueries");

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

module.exports = connections;
