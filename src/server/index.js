const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(
    cors({})
  );
app.use(express.json());

const db = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "password",
    database: "myfilms"
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

app.listen(3001, () => {
    console.log("dupa is running on 3001");
});
