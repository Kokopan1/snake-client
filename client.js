const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

   
  // Register the 'connect' event handler
  conn.on("connect", () => {
    console.log("Successfully connectd to game server!");
    // send name to the server
    conn.write('Name: Ash');
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Recieving Data from Clients
  conn.on('data', (data) => {
    console.log(data);
  });
 
  return conn;
};


module.exports = connect;
