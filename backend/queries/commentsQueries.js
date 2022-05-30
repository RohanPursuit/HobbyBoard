//import DB
const db = require("../db/dbConfig");

//get all comments from a post
const getAllComments = async ({ post_id }) => {
  try {
    const allComments = await db.any(
      "SELECT * FROM comments WHERE post_id=$1",
      post_id
    );
    return allComments;
  } catch (error) {
    return error;
  }
};

// create new comment
const createComment = async (post_id, username, comment, date) => {
  try {
    const newComment = await db.one(
      "INSERT INTO comments (post_id, username, comment, date) VALUES ($1, $2, $3, $4) RETURNING *",
      [post_id, username, comment, date]
    );
    return newComment;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllComments, createComment };
