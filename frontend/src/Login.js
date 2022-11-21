import './Login.css';

function Login() {
    return (
        <div className="LoginPage">
            <div className="LoginBox">
                <div className="LoginTitle">
                    Log in to your Account
                </div>
                <div className="InputLayer">
                    Username:
                    <input className="TextBox" type="text" />
                </div>
                <div className="InputLayer">
                    Password:
                    <input className="TextBox" type="text" />
                </div>
                <div className="InputLayer">
                    Don't Have an Account?
                    <a href="/">Create One</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
