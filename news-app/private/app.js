module.exports = function(app) {
    // Low DB Configurations
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');

    const adapter = new FileSync('db.json');
    const db = low(adapter);

    // REST API's
    app.get("/login", function(req, res) {
        let username = req.query.username;
        let password = req.query.password;
    
        let users = db.get('users')
            .find({ username: username, password: password })
            .value()

        if(users) {
            res.status(200).send("Log in successfull");
        } else {
            res.status(401).send("Invalid credentials");
        }
    });

    // Creating user in my lowdb by default
    db.defaults({
        users: [{
            username: 'akr',
            password: 'akr'
        }],
        savedArticles: [],
        listOfSources: []
    })
    .write()
};