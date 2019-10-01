const sql = require('../config/connection');

var DataBase = function() {}

DataBase.prototype.insertProject = function(data)
{
    sql.query("INSERT INTO projects VALUES (null,?,?,?,?,?,?,?)",
    data);
}

DataBase.prototype.getProject = function(data, callback)
{
//  sql.query("SELECT * FROM projects INNER JOIN comments ON comments.project_id = ?",
    sql.query("SELECT * FROM projects WHERE project_id=?",
    data, function(err, result)
    {
        if(err)
            callback(err, null);
        else
            callback(null, result);
    });
}

DataBase.prototype.getProjects = function(callback)
{
    sql.query("SELECT * FROM projects", 
    function(err, result)
    {
        if(err)
            callback(err, null);
        else
            callback(null, result);
    });
}

DataBase.prototype.insertComment = function(data)
{
    sql.query("INSERT INTO comments VALUES (null,?,?,?)",
    data);
}

DataBase.prototype.getComments = function(data, callback)
{
    sql.query("SELECT * FROM comments WHERE project_id=?",
    data, function(err, result)
    {
        if(err)
            callback(err, null);
        else
            callback(null, result);
    });
}

var db = new DataBase();

module.exports = db;