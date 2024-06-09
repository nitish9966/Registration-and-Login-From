import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password }) 
            .then(result => console.log(result))
            .catch(err => console.log(err));
            document.getElementById('name').value=""
            document.getElementById('email').value=""
            document.getElementById('password').value=""
            navigate('/login')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                /><br></br>
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
                <button type="submit">Register</button>
            </form>
            <div>
                <p>If you already registered please go to <b><Link to={'/login'}>login</Link></b></p>
            </div>
        </div>
    )
}

export default Signup;
