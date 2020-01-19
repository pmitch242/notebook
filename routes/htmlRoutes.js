// Dependencies
const path = require("path");

module.exports = function (app) {
    // route to notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
    
    // route to css
    app.get("/assets/css/styles.css", function(req, res){
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
    });

    // If no matching route is found default to index.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}