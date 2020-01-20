const db = require("../db/db");


module.exports = function (app){
    let num = 0;

    app.get("/api/notes", function(req,res){
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        num++;
        let newNote = req.body;
        newNote.id = num;
        console.log(newNote)
        db.push(newNote);
        res.json(newNote);
    })

    app.delete("/api/notes/:id", function(req, res){
        let deleteID = req.params.id;
        console.log
    })
}