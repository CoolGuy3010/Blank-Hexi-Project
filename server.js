var express = require("express");

var app = express();

var server = app.listen(1337, () => {
    console.log("This is running on port:", server.address().port)
})

app.use(express.static("public"))

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Shut Down Server:?', answer => {
  console.log("Shut Down Server");
  server.close()
  readline.close();
});
