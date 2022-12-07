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

app.get('/api/get/user', (req, res)=> {
    const sqlSelect = "SELECT * FROM useraccount";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// app.get('/api/get/user/sign_in', (req, res)=> {
//     const username = req.body.username;
//     const password = req.body.password;
//     const sqlSelect = "SELECT * FROM useraccount WHERE username = "+req.params.username + "password = " + req.params.password;
//     // db.query(sqlSelect, (err, result) => {
//     //     res.send(result);
//     // });
//     db.query(sqlSelect, [username, password], (err, result) => {
//         console.log(result);
//     });
// });

app.get('/api/get/course', (req, res)=> {
    const sqlSelect = "SELECT * FROM courses";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert/user", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO useraccount (firstname, lastname, username, password) VALUES (?, ?, ?, ?)"
    db.query(sqlInsert, [firstname, lastname, username, password], (err, result) => {
        console.log(result);
    });
});

app.post("/api/insert/course", (req, res) => {
    const coursename = req.body.coursename;
    const coursestartdate = req.body.coursestartdate;
    const courseenddate = req.body.courseenddate;

    const sqlInsert = "INSERT INTO courses (coursename, coursestartdate, courseenddate) VALUES (?, ?, ?)"
    db.query(sqlInsert, [coursename, coursestartdate, courseenddate], (err, result) => {
        console.log(result);
    });
});


app.listen(3001, () => {
    console.log('running on port 3001');
})