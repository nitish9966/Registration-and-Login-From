import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', {  email, password }) 
            .then(result => {console.log(result)
                if(result.data==="Success"){
                    navigate('/home')
                }
            })
            .catch(err => console.log(err));
            document.getElementById('email').value=""
            document.getElementById('password').value=""
            
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <label>Email: </label>
                <input 
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                /><br></br>
                <label>Password: </label>
                <input 
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                /><br></br>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>If you are not registered yet? please <b><Link to={'/register'}> Register </Link></b> first</p>
            </div>
        </div>
    )
}

export default Login;
