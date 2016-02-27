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
		
		 
		 var query = connection.query('SELECT * from ferie_users WHERE username = ' + "'" + req.query.username + "'" + ' AND password = ' + "'" + req.query.password + "'", function(err, rows, fields) {
		   if (!err)
			 console.log('The solution is: ', rows);
		   else
			 console.log('Error while performing Query: ' + err);
		 });
		 console.log('Query: ' + query.sql);
		 
		 connection.end();
		console.log('usernameFromServer: ' + req.query.username);
		console.log('passwordFromServer: ' + req.query.password);
		

		
		/*
		var tempUser = new User();
		tempUser.checkUsernameAndPassword(req.query.username, function(err, username) {
			if (err) {
				console.log(err);
			}else {
				console.log('WWWWWWWWWWWWWWWWWWWWWW');
			}
			
		});*/
		
		//console.log('tempuser.username: ' + tempUser.username);
	
		/*User.find({ username: 'sevilayha3' }, function(err, user) {
			console.log('IMetoden: ' + user);
		  if (err) throw err;

		  // object of the user
		  console.log('Object of the user: ' + user);
		});
		//console.log(testUser.users.username);
		//console.log(testUser.user.username);
		console.log(User.username);*/
		
		
		if(!req.query.username) {
			return res.json({"status": "error", "message": "missing username"});
		} else if(req.query.username != "X") {
			return res.json({"status": "error", "message": "wrong username"});
		} else if(req.query.password != "XX") {
			return res.json({"status": "error", "message": "wrong password"});
		} else {
			 return res.json({"status": "ok", "message": "successful login"});
		}
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