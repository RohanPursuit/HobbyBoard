//import db
const db = require("../db/dbConfig");

//create queries

//getAllPosts query
const getAllPosts = async ({ project_id }) => {
  try {
    const allPosts = await db.any(
      "SELECT * FROM posts WHERE project_id=$1",
      project_id
    );
    return allPosts;
  } catch (error) {
    return error;
  }
};

//getOnePost query
const getOnePost = async ({ project_id, post_id }) => {
  try {
    const onePost = await db.one(
      "SELECT * FROM posts WHERE project_id=$1 AND post_id=$2",
      [project_id, post_id]
    );
    return onePost;
  } catch (error) {
    return error;
  }
};

//createNewPost
const createPost = async (project_id, members_only, title, contents, date) => {
  try {
    const newPost = await db.one(
      "INSERT INTO posts (project_id, members_only, title, contents, date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [project_id, members_only, title, contents, date]
    );
    return newPost;
  } catch (error) {
    return error;
  }
};

//deletePost
const deletePost = async ({ project_id, post_id }) => {
  try {
    const newPost = await db.one(
      "DELETE FROM posts WHERE project_id=$1 AND post_id=$2 RETURNING *",
      [project_id, post_id]
    );
    return newPost;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//export queries
module.exports = { getAllPosts, getOnePost, createPost, deletePost };
