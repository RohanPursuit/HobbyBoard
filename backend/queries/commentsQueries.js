//import DB
const db = require('../db/dbConfig');

//get all comments from a post
const getAllComments = async ({ post_id }) => {
  try {
    const allComments = await db.any(
      'SELECT * FROM comments WHERE post_id=$1',
      post_id
    );
    return allComments;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllComments };
