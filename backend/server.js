// DEPENDENCIES
const server = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
