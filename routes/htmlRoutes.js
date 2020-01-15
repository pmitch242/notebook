// Dependencies
const path = require("path");

module.exports = function(app) {

     // If no matching route is found default to index.html
    app.get ("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get ("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
}