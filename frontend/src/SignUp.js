import { useState, useEffect } from 'react';
import './SignUp.css';
import Axios from 'axios'

function SignUp() {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const submitSignUp = () => {
        Axios.post("http://localhost:3001/api/insert", {
            firstname:firstname, 
            lastname:lastname, 
            username:username, 
            password:password
        }).then(() => {
            alert("insert succesful");
        });
    };

    return (
        <div className="SignUpPage">  
            <div className='form'>
                <h1> Sign Up </h1>
                <label>First Name: </label>
                <input type="text" name="firstname" onChange={(e) => { setfirstname(e.target.value) }}/>
                <label>Last Name: </label>
                <input type="text" name="lastname" onChange={(e) => { setlastname(e.target.value) }}/>
                <label>Username: </label>
                <input type="text" name="username" onChange={(e) => { setusername(e.target.value) }}/>
                <label>Password: </label>
                <input type="text" name="password" onChange={(e) => { setpassword(e.target.value) }}/>
                <button onClick={submitSignUp}> Submit </button>
            </div>
        </div>
    );
}

export default SignUp;
