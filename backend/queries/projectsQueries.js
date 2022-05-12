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

//export query functions
module.exports = { getAllProjects };
