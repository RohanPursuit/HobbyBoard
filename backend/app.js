// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const http = require('http')

//IMPORT QUERIES
const { testQuery } = require("./queries/testQuery");
const projectsControllers = require("./controllers/projectControllers");
const userController = require("./controllers/userController");
const connectionsController = require("./controllers/connectionsController")

// CONFIGURATION
const app = express();

const server = http.createServer(app)
const io = require('socket.io')(server, {
  cors:{
      origin: [process.env.FRONT_END_URL]
  }})

io.on('connection', socket => {
  console.log("Hi", socket.id)
})

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.use("/projects", projectsControllers);
app.use("/users", userController);
app.use("/connections", connectionsController)
app.use("/connections", notify)

function notify(req,res){
  const {project_id} = req.body
  if(req.method === "POST"){
    io.emit("request" + project_id, "New Request") //rename
    console.log("Post Request")
  }
  if(req.method === "DELETE"){
    io.emit("request" + project_id, "Request Canceled")
    console.log("Delete Request")
  }
}

//async, so we can use query correctly
app.get("/", async (req, res) => {
  //use query function to get data from db
  const exampleData = await testQuery();
  res.send(exampleData.content);
});

// EXPORT
module.exports = server;
