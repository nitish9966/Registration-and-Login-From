import { Link } from "react-router-dom";

function Login(){

    return(
        <div>
            <form>
            <label>Email: </label>
            <input type="email" 
            placeholder="Enter your Email"/><br></br>
            <label>Password: </label>
            <input type="password" 
            placeholder="Enter your Password"/><br></br>
            <button type="submit">Login</button>
            </form>
            <div>
                <p>Are you not registered yet? please 
                    <b><Link to={'/register'}> register</Link></b> first
                </p>
            </div>
        </div>
    )
}

export default Login;