var User = require('../app/models/user_model');
var mysql = require('mysql');
var appRouter = function(app) {
	
	app.get("/", function(req, res) {
    res.json("Hello World22");
	});
	
	app.get("/login", function(req, res) {
		
		var connection = mysql.createConnection({
		  host     : 'bedbuddy.no',
		  user     : 'bedbunud_jj',
		  password : 'Djxxli44',
		  database : 'bedbunud_1'
		});
		connection.connect();
		
		 var statusOk = false;
		 var query = connection.query('SELECT * from ferie_users WHERE username = ' + "'" + req.query.username + "'" + ' AND password = ' + "'" + req.query.password + "'", function(err, rows, fields) {
		   if (!err){
			   	console.log('The solution is: ', rows);
		   }else{
			   console.log('Error while performing Query: ' + err);
		   }
			console.log('lengde: ' + rows.length);
			if(rows.length == 1) {
				return res.json({"status": "ok", "message": "Successful login"});	
			} else {
				 console.log('SUUUUCCCCEEESSFFUUUULL LOGIN');
				 return res.json({"status": "error", "message": "Wrong username or password"});
				 
			}
			
			
		 });
		 console.log('Query: ' + query.sql);
		 
		 connection.end();
		 console.log('usernameFromServer: ' + req.query.username);
		 console.log('passwordFromServer: ' + req.query.password);
		
	});
	
	
	app.get("/account", function(req, res) {
    var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
	});
	
	
	app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
	});
	
	
}
 
module.exports = appRouter;