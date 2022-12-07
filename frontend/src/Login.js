import { useState, useEffect } from 'react';
import './Login.css';
import Axios from 'axios'

function Login() {
    const [UIUCStudentList, setUIUCStudentList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get/user").then((response) => {
            setUIUCStudentList(response.data)
        })
    }, []);

    return (
        <div className="LoginPage">
            <div className="LoginBox">
                <div className="LoginTitle">
                    Log in to your Account
                </div>
                <div className="InputLayer">
                    Username:
                    <input className="TextBox" type="text" name = "username"/>
                </div>
                <div className="InputLayer">
                    Password:
                    <input className="TextBox" type="text" />
                </div>
                <input type="button" value="Submit" className="SubmitButton" name ="password"/>
                <div className="InputLayer">
                    Don't Have an Account?
                    <a href="/SignUp">Create One</a>
                </div>
            </div>
            { UIUCStudentList.map((val) => {
                        return <h1>Username: {val.username} | Password: {val.password}</h1> 
                // displays all values from student list
                // need to find specified username and password
            })} 
        </div>
    );
}

export default Login;
