//import express
const express = require("express");

//create variable for our router
const posts = express.Router();

//import queries
const { getAllComments, createComment } = require("../queries/commentsQueries");

//create routes

// getAllcomments from post

posts.get("/:post_id/comments", async (request, response) => {
  console.log(`get request to /${request.params.post_id}/comments`);
  const allComments = await getAllComments(request.params);
  response.status(200).json(allComments);
});

// create newComment
posts.post("/:post_id/comments", async (request, response) => {
  console.log(`post request to /${request.params.post_id}/comments`);
  // get post_id from params
  const { post_id } = request.params;
  // get username & comment from body
  const { username, comment } = request.body;
  //get the current date
  const date = new Date(Date.now()).toISOString();
  //use data to make new comment using query
  const newComment = await createComment(post_id, username, comment, date);
  //send the result to the user
  response.status(200).json(newComment);
});

//export router
module.exports = posts;
