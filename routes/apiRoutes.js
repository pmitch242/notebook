const db = require("../db/db");

module.exports = function (app){
    app.get("/api/notes", function(req,res){
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        db.push(res.body);
        res.json(true);
    })
}