//import the DB variable that we'll be making queries to
const db = require("../db/dbConfig");

//getAllProjects async function
//input(none)
//output array of all projects
const getAllProjects = async () => {
  //try to fetch all items from projects table
  try {
    const allProjects = await db.any("SELECT * FROM projects");
    //return it
    return allProjects;
  } catch (err) {
    //if there's an error, return it.
    return err;
  }
};

//getOneProject
const getOneProject = async (pid) => {
  //try to fetch project using pid
  try {
    const targetProject = await db.one(
      "SELECT * FROM projects WHERE project_id=$1",
      pid
    );
    //return it
    return targetProject;
  } catch (err) {
    //if there's an error, return it.
    return err;
  }
};

//createProject async function
//input(project)
//output new project
const createProject = async (project) => {
  //try to create new project
  try {
    const { name, details, project_image, archived } = project;
    const newProject = await db.one(
      "INSERT INTO projects (name, details, project_image, archived) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, details, project_image, archived]
    );
    //return project
    return newProject;
  } catch (err) {
    //if err, return err
    return err;
  }
};

//export query functions
module.exports = { getAllProjects, createProject, getOneProject };
