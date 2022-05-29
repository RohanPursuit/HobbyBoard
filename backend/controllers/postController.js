//import express
const express = require('express');

//create variable for our router
const posts = express.Router();

//import queries
const { getAllComments } = require('../queries/commentsQueries');

//create routes

// getAllcomments from post

posts.get('/:post_id/comments', async (request, response) => {
  console.log(`/get request to /${request.params.post_id}/comments`);
  const allComments = await getAllComments(request.params);
  response.status(200).json(allComments);
});

//export router
module.exports = posts;
