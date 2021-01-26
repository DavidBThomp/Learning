const name = prompt("What is your name?");
let message = "Hello, " + name + ". Welcome to my music site! ";

// const message = "Hello " + name + ". Welcome to my music site! " + "I\'m so happy you have decided to come to my site, " + name + ". Please feel free to browse!";

message += "I\'m so happy you came by to visit ";
message += name;
message += ". Feel Free to come again and listen to music!"

console.log(message);