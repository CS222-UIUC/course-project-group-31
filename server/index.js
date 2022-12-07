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

app.get('/api/get/user/:username:password', (req, res)=> {
    // const username = req.params.username;
    // const password = req.params.password;
    
    var vals = req.params.password.split(",");
    const username = vals[0];
    const password = vals[vals.length-1];
    console.log("username: "+ username);
    console.log("password: "+ password);

    if (username != null && password != null) {
        const sqlSelect = "SELECT * FROM useraccount WHERE username = ? AND password = ?";
        db.query(sqlSelect, [username, password] , (err, result) => {
            console.log("result: " + result);
            if (err) throw error;
            if (res.length > 0) {
                req.session.username = username;
                req.session.password = password;
                window.location.href="../Home"
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            console.log(result);
        });
    } else {
        res.send('Please enter Username and Password!');
    }
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

app.get('/api/get/course', (req, res)=> {
    const sqlSelect = "SELECT * FROM courses";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
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

app.delete("/api/delete/course/:coursename", (req, res) => {
    const name = req.params.coursename;

    const sqlDelete = "DELETE FROM courses WHERE coursename = ?";
    db.query(sqlDelete, name, (err, result) => {
        console.log(result);
        if (err) console.log(err);
    });

});

app.put("/api/update/course/coursestartdate", (req, res) => {
    const coursename = req.body.coursename;
    const startdate = req.body.coursestartdate;

    const sqlUpdate = "UPDATE courses SET coursestartdate = ? WHERE coursename = ?";
    db.query(sqlUpdate, [startdate, coursename], (err, result) => {
        console.log(result);
        if (err) console.log(err);
    });

});

app.put("/api/update/course/courseenddate", (req, res) => {
    const coursename = req.body.coursename;
    const enddate = req.body.courseenddate;

    const sqlUpdate = "UPDATE courses SET courseenddate = ? WHERE coursename = ?";
    db.query(sqlUpdate, [enddate, coursename], (err, result) => {
        console.log(result);
        if (err) console.log(err);
    });

});

/////////////////////////////////////////////////////////////////////////////////////

app.get('/api/get/review', (req, res)=> {
    const sqlSelect = "SELECT * FROM coursereviews";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert/review", (req, res) => {
    const coursename = req.body.coursename;
    const coursereview = req.body.coursereview;

    const sqlInsert = "INSERT INTO coursereviews (coursename, coursereview) VALUES (?, ?)"
    db.query(sqlInsert, [coursename, coursereview], (err, result) => {
        console.log(result);
    });
});

app.put("/api/update/courseReview/review", (req, res) => {
    const coursename = req.body.coursename;
    const coursereview = req.body.coursereview;

    const sqlUpdate = "UPDATE coursereviews SET coursereview = ? WHERE coursename = ?";
    db.query(sqlUpdate, [coursereview, coursename], (err, result) => {
        console.log(result);
        if (err) console.log(err);
    });

});

app.post("/api/insert/enrollment", (req, res) => {
    const useraccountID = req.body.useraccountID;
    const courseaccountID = req.body.courseaccountID;

    const sqlInsert = "INSERT INTO useraccount (useraccountID, courseaccountID) VALUES (?, ?)"
    db.query(sqlInsert, [useraccountID, courseaccountID, username, password], (err, result) => {
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log('running on port 3001');
})