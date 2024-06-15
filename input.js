
let connection;

const setupInput = function(conn) {
  connection = conn;

  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  const stdin = process.stdin;

  // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setRawMode(true);

  // utf8 encoding is set so that we can read the text data that is input
  stdin.setEncoding("utf8");

  // resume stdin so the program can listen for input
  stdin.resume();

  
  //Movement Keys
  process.stdin.on('data', (data) => {
    if (data === 'w') {
      connection.write("Move: up");
    } else if (data === 'a') {
      connection.write("Move: left");
    } else if (data === 's') {
      connection.write("Move: down");
    } else if (data  === 'd') {
      connection.write("Move: right");
    }
  

    //Special Key Speech Bubbles
    process.stdin.on('data', (data) => {
      if (data === 'g') {
        connection.write("Say: GO!");
      } else if (data === 'f') {
        connection.write("Say: Fun");
      }
    });

  });
  stdin.on("data", handleUserInput);

  // return the stdin object so we can use it elsewhere in the program
  return stdin;
};

// speficies what happens when a key is pressed on the keyboard input
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};



// exports function
module.exports = setupInput;
