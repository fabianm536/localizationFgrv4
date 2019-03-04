var express = require('express');
var pg = require("pg");
var app = express();

app.use(express.static(__dirname + '/public'));


//////////////////////////
/////postgres config//////
//////////////////////////
var config = {
    user: 'postgres',
    database: 'gtrtest',
    password: 'postgres',
    port: 5432,
    max: 10, // max number of connection can be open to database
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

app.get('/pool', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        var fields = req.param('fields');
        var values = req.param('values');

        var query = "INSERT INTO etudes_sites_geoter_monde ( " + fields + " ) VALUES (" + values + "); update etudes_sites_geoter_monde set geom=st_SetSrid(st_MakePoint(long, lat), 4326);"
        client.query(query, function (err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
    });
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});