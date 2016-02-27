var appRouter = function(app) {
	
	app.get("/", function(req, res) {
    res.json("Hello World22");
	});
	
	app.get("/login", function(req, res) {
	console.log('usernameFromServer: ' + req.query.username);
	console.log('passwordFromServer: ' + req.query.password);
    var accountMock = {
        "username": "jjjafari",
        "password": "djxxli44",
    }
    if(!req.query.username) {
        return res.json({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.json({"status": "error", "message": "wrong username"});
	} else if(req.query.password != accountMock.password) {
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