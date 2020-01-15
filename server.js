// Dependencies 
const express = require("express");
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listener; Starts server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});