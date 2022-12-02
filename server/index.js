var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cs222_courserec_db'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res)=> {
    const sqlSelect = "SELECT * FROM useraccount";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO useraccount (firstname, lastname, username, password) VALUES (?, ?, ?, ?)"
    db.query(sqlInsert, [firstname, lastname, username, password], (err, result) => {
        console.log(result);
    });
});


app.listen(3001, () => {
    console.log('running on port 3001');
})