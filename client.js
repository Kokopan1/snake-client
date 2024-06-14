const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

   
  // Client send a Reply
  conn.on("connect", () => {
    conn.write("Hello from client!");
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Recieving Data from Clients
  conn.on('data', (data) => {
    console.log('Name:ASH', data);
  });

  return conn;
};

module.exports = connect;