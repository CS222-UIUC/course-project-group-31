import { useState, useEffect } from 'react';
import './Login.css';
import Axios from 'axios'

function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const submitLogin = (course) => {
        Axios.get('http://localhost:3001/api/get/user/' + [username, password]);
        window.location.href="../Home"
    };

    return (
        <div className="LoginPage">
            <div className="LoginBox">
                <div className="LoginTitle">
                    Log in to your Account
                </div>
                <div className="InputLayer">
                    Username:
                    <input className="TextBox" type="text" name = "username" onChange={(e) => { setusername(e.target.value) }}/>
                </div>
                <div className="InputLayer">
                    Password:
                    <input className="TextBox" type="text" name = "password" onChange={(e) => { setpassword(e.target.value) }}/>
                </div>
                <button onClick={submitLogin} className = "SubmitButton" value = "Submit"> Submit </button>
                {/* <input type="button" value="Submit" className="SubmitButton" onClick={submitLogin}/> */}
                <div className="InputLayer">
                    Don't Have an Account?
                    <a href="/SignUp">Create One</a>
                </div>
            </div> 
        </div>
    );
}

export default Login;
