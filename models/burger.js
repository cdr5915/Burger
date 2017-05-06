var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
	selectALL: function(cb){
		orm.selectALL("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(cb){	
		orm.insertOne("burgers", function(res){
			cb(res);
		});
	},
	updateOne: function(cb){
		orm.updateOne("burgers", function(res){
			cb(res);
		});
	}
};


module.exports = burger;
