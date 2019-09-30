const sql = require('../config/connection');

var senailab =
{
    insertProject: function(dataFromUser)
    {
        sql.query("INSERT INTO projects VALUES (default,?,?,?,?,?,?,?)",
        dataFromUser);
    },
    getProject: function(idProject)
    {
        sql.query("SELECT * FROM projects WHERE project_id=?",
        idProject);
    },
    insertComment: function(dataFromUser)
    {
        sql.query("INSERT INTO comments VALUES (default,?,?,?)",
        dataFromUser);
    },
    getComments: function(idProject)
    {
        sql.query("SELECT * FROM comments WHERE project_id=?",
        idProject);
    }
}

module.exports = senailab;