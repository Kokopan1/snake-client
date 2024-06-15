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


// ===== IGNORE CODE BEYOND THIS POINT =====


/* === Alternative Code Option Snippet: Using Intervals to Move Snake ===
set up the interval
conn.on("connect", () => {

  conn.write("Move: up")

  setInterval(() => {
    conn.write("Move: up")
  }, 1000)
});
*/



/* === Alternative Code Option Snippet: Using setTimeout to Move Snake ===
conn.on("connect", () => {
  // send name to the server
  conn.write("Move: up")

  // We nested it here but we could also create a new conn.on
  setTimeout(() => {
    conn.write("Move: up")
  }, 1000)
});

conn.on("connect", () => {
  setTimeout(() => {
    conn.write("Move: up")
  }, 1500)
})

conn.on("connect", () => {
  setTimeout(() => {
    conn.write("Move: up")
  }, 2000)
})
  */