import { useState, useEffect } from 'react';
import './features.css';

function Login() {
    return (
            <div className="Box">
                <div className="Title">
                    Log in to your Account
                </div>
                <div className="InputLayer">
                    Username:
                    <input className="TextBox" type="text"/>
                </div>
                <div className="InputLayer">
                    Password:
                    <input className="TextBox" type="text" />
                </div>
                <input type="button" value="Submit" className="SubmitButton"/>
                <div className="InputLayer">
                    Don't Have an Account?
                    <a href="/SignUp">Create One</a>
                </div>
            </div>
    );
}

export default Login;
