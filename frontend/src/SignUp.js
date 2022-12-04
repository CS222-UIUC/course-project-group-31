import { useState, useEffect } from 'react';
import './features.css';
import Axios from 'axios'

function SignUp() {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const submitSignUp = () => {
        Axios.post("http://localhost:3001/api/insert/user", {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password
        }).then(() => {
            this.props.history.push('/');
        });
    };

    return (
        <div className="Box">
            <div className="Title">
                Create your Account
            </div>
            <div className="InputLayer">
                First Name:
                <input className="TextBox" type="text" onChange={(e) => { setfirstname(e.target.value) }}/>
            </div>
            <div className="InputLayer">
                Last Name:
                <input className="TextBox" type="text" onChange={(e) => { setlastname(e.target.value) }}/>
            </div>
            <div className="InputLayer">
                Username:
                <input className="TextBox" type="text" onChange={(e) => { setusername(e.target.value) }}/>
            </div>
            <div className="InputLayer">
                Password:
                <input className="TextBox" type="text" onChange={(e) => { setpassword(e.target.value) }}/>
            </div>
            <input type="button" value="Submit" className="SubmitButton" onClick={submitSignUp}/>
        </div>
    );
}

export default SignUp;
