const express = require("express");
const projects = express.Router();
const { getAllProjects, createProject } = require("../queries/projectsQueries");

//get all project
projects.get("/", async (_, res) => {
  const allProjects = await getAllProjects();
  if (allProjects.length === 0) {
    res.status(404).json({ error: "error" });
  } else {
    res.status(200).json(allProjects);
  }
});

//create project
projects.post("/:id", async (req, res) => {
  const addProject = await createProject(req.body);
  res.status(200).json(addProject);
});

module.exports = projects;
