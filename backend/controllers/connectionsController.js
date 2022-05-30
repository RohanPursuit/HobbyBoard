const express = require("express");
const connections = express();
const {
  joinRequest,
  deleteRequest,
  removeCollaborator,
  getAllProjectConnections,
  updateToCollaborator,
  getAllUserConnections,
} = require("../queries/connectionsQueries");

//Send join request
connections.post("/", async (request, response) => {
  console.log("Post /connections");
  console.log(request.body);
  const pending = await joinRequest(request.body);
  response.status(200).json(pending);
});

//New follower
connections.post("/followers", async (request, response) => {
  console.log("Post /connections/followers")
  const following = await followRequest(request.body)
  response.status(200).json(following)
})

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

connections.get("/:project_id", async (request, response) => {
  console.log("get /connections");
  const projectConnections = await getAllProjectConnections(request.params);
  response.status(200).json(projectConnections);
});

connections.get("/associated/:username", async (request, response) => {
  console.log("get user /connections");
  console.log(request.params);
  const userConnections = await getAllUserConnections(request.params);
  response.status(200).json(userConnections);
});

connections.put("/", async (request, response) => {
  console.log("put /connections");
  const newConnection = await updateToCollaborator(request.body);
  response.status(200).json(newConnection);
});

module.exports = connections;
