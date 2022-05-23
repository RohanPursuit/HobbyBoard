//import db variable
const db = require("../db/dbConfig");

//create join request async function
//input(requestInfo) requestInfo {username: "", project_id: ""}
//output inserted row
const joinRequest = async (requestInfo) => {
  const { username, project_id } = requestInfo;
  //try to create new join request to project_id
  try {
    const pending = await db.one(
      "INSERT INTO connections (username, project_id, permissions) VALUES ($1, $2, $3) RETURNING *",
      [username, project_id, "request"]
    );
    //return inserted row
    return pending;
  } catch (err) {
    //if err, return err
    return err;
  }
};

const deleteRequest = async ({ username, project_id }) => {
  try {
    const removeRequest = await db.one(
      "DELETE FROM connections WHERE username=$1 AND project_id=$2 AND permissions=$3 RETURNING *",
      [username, project_id, "request"]
    );

    return removeRequest;
  } catch (err) {
    return err;
  }
};

const removeCollaborator = async ({ username, project_id }) => {
  try {
    const removedUser = await db.one(
      "DELETE FROM connections WHERE username=$1 AND project_id=$2 AND permissions='collaborator' RETURNING *",
      [username, project_id]
    );
    return removedUser;
  } catch (error) {
    return error;
  }
};

module.exports = { joinRequest, deleteRequest, removeCollaborator };
