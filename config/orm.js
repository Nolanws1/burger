var connection = require("../config/connection.js");

var orm = {
    selectAll: function () {
        connection.query = ("SELECT * FROM burgers", (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    },
    
    insertOne: function () {
        var burgerInfo = { }
        connection.query = ("INSERT INTO burgers SET ?", burgerInfo, function(err, res){
            if(err) throw err;
        });
    },
    
    updateOne: function () {

    }

};

module.exports = orm;
