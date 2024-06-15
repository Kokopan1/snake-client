const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

   
  // Register the 'connect' event handler
  conn.on("connect", () => {
    console.log("Successfully connectd to game server!");
    // send name to the server
    conn.write('Name: Ash');
  });

  /*
  conn.on("connect", () => {
    // send name to the server
    conn.write('Move: up');
  });

 */
  
  /* Using Interval
  set up the interval
  conn.on("connect", () => {

    conn.write("Move: up")

    setInterval(() => {
      conn.write("Move: up")
    }, 1000)
  });
  // stop the interval
*/



  /* using setTimeout
  conn.on("connect", () => {
    // send name to the server
    conn.write("Move: up")

    // We nested it here but we could also create a new conn.on
    setTimeout(() => {
      conn.write("Move: up")
    }, 1000)
  });
  */
  
  
  /* using setTimeout to move snake
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

  conn.on("connect", () => {
    setTimeout(() => {
      conn.write("Move: up")
    }, 2500)
  })
  */

  /*
conn.on("connect", () => {
    setTimeout ( () => {
      conn.write("Move: up")
    }, 1000)
  */
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Recieving Data from Clients
  conn.on('data', (data) => {
    console.log(data);
  });
 
  return conn;
};


module.exports = connect;