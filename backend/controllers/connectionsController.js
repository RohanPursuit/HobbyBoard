const express = require("express");
const connections = express();
const {
  joinRequest,
  deleteRequest,
  removeCollaborator,
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

connections.delete("/:username", async (request, response) => {
  const { username } = request.params;
  const { project_id } = request.body;
  console.log(`DELETE request for ${username} on project ${project_id}`);
  const removedCollaborator = await removeCollaborator(username, project_id);
  response.status(200).json(removedCollaborator);
});

module.exports = connections;
