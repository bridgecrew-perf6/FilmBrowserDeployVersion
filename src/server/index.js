const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");
require('dotenv').config();
const dbConfig = {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
};

console.log({dbConfig})
const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected');
});

const app = express();
app.set('port', process.env.react_app_server_port || 80);

app.use(
  cors({})
);

app.listen(process.env.react_app_server_port, () => {
    console.log('Server started on port: ' + process.env.react_app_server_port);
});

app.post('/create', (req, res) => {
        const name = req.body.name
        const type = req.body.type
        const year = req.body.year
        const country = req.body.country

        db.query("INSERT INTO films (name, type, year, country) VALUES (?,?,?,?)", 
        [name, type, year, country],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get('/films', (req, res) => {
    db.query("SELECT * FROM films", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/', (req, res) => {
    res.send('qxd')
})

app.listen(3001, () => {
    console.log("dupa is running on 3001");
});
