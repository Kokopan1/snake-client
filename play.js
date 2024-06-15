
const connect = require("./client"); // .client is the file path
const setupInput = require("./input");


console.log("Connecting ...");
const connection = connect();
setupInput(connection);