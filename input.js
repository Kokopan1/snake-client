
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times

  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  
  process.stdin.on('data', (data) => {
    if(data === 'w') {
      connection.write("Move: up");
    } else if (data === 'a') {
      connection.write("Move: left");
    } else if (data === 's') {
      connection.write("Move: down");
    } else if (data  === 'd') {
      connection.write("Move: right");
    }

  });
  stdin.on("data", handleUserInput);

  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

// speficies what happens when a key is pressed on the keyboard input
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};




module.exports = setupInput;
