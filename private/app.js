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

    app.get("/getListSources", function(req, res) {
        let sources = db.get('listOfSources').value();

        if(sources) {
            res.status(200).json(sources);
        } else {
            res.status(404).json({message: "No sources available in the list"});
        }
    });

    app.get("/getListOfSavedArticles", function(req, res) {
        let savedArticles = db.get('savedArticles').value();

        if(savedArticles) {
            res.status(200).json(savedArticles);
        } else {
            res.status(404).json({message: "No saved articles available"});
        }
    });

    app.post("/saveArticle", function(req, res) {
        let savedArticles = db.get('savedArticles')
            .push(req.body)
            .write()

        if(savedArticles) {
            res.status(200).json({message: "Article saved successfully"});
        } else {
            res.status(403).json({message: "Cannot save article"});
        }
    });

    app.post("/listSources", function(req, res) {
        let index = req.body.index;
        let sources = db.get('listOfSources').value();
                
        let addSources;
        if(sources.length === 0) {
            addSources = db.get('listOfSources')
                .push({index: req.body.index})
                .write()

            if(addSources) {
                res.status(200).json({message: "Source added successfully"});
            } else {
                res.status(403).json({message: "Cannot add source"});
            }
        } else {
            var found = sources.some(function (el) {
                return el.index === index;
            });

            if (!found) {
                if(sources.length === 5) {
                    res.status(403).json({message: "Cannot add more than 5 sources"});
                } else {
                    addSources = db.get('listOfSources')
                        .push({index: req.body.index})
                        .write() 

                    if(addSources) {
                        res.status(200).json({message: "Source added successfully"});
                    } else {
                        res.status(403).json({message: "Cannot add source"});
                    }
                }
            } else {
                addSources = db.get('listOfSources')
                    .remove({index: index})
                    .write()

                if(addSources) {
                    res.status(200).json({message: "Source removed successfully"});
                } else {
                    res.status(403).json({message: "Cannot remove source"});
                }
            }            
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