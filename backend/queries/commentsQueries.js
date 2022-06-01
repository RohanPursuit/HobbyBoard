//import DB
const db = require("../db/dbConfig");

//get all comments from a post
const getAllComments = async ({ post_id }) => {
  try {
    const allComments = await db.any(
      "SELECT comments.username,comments.comment,comments.comment_id, comments.post_id, comments.date, users.profile_image FROM comments JOIN users ON users.username = comments.username WHERE comments.post_id=$1 ORDER BY comments.date ASC",
      post_id
    );
    return allComments;
  } catch (error) {
    return error;
  }
};

//get one comment from a post
const getOneComment = async ({ post_id, comment_id }) => {
  try {
    const oneComment = await db.one(
      "SELECT * FROM comments WHERE post_id=$1 AND comment_id=$2",
      [post_id, comment_id]
    );
    return oneComment;
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

//delete comment
const deleteComment = async ({ post_id, comment_id }) => {
  try {
    const deletedComment = await db.one(
      "DELETE FROM comments WHERE post_id=$1 AND comment_id=$2 RETURNING *",
      [post_id, comment_id]
    );
    return deletedComment;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
  createComment,
  deleteComment,
  getOneComment,
};
