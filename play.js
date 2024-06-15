
// Import functions
const connect = require("./client"); // note for me -> .client is the file path
const setupInput = require("./input");

// Console that we are connecting
console.log("Connecting ...");

//Store the result in the connection variable
const connection = connect();

//Pass the connection variable to setupInput.
setupInput(connection);