import { Link } from "react-router-dom"

// styles
import "./Account.css"

const Account = () => {
    return (
        <div className="account-container">
            <div className="login-container">
                <h1>LOGIN</h1>

                <form name="login">
                    <label>Enter your email and password to login:</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="button" value="LOGIN" className="login-btn" />
                </form>

                <Link className="lost-pass-link">Forgot your password?</Link>

                <Link className="new-acc-link">CREATE NEW ACCOUNT</Link>
            </div>
        </div>
    )
}
export default Account