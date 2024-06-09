import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; // Correct import

function Signup() {
    const [name, setName] = useState(''); // Initialize with empty string
    const [email, setEmail] = useState(''); // Initialize with empty string
    const [password, setPassword] = useState(''); // Initialize with empty string

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password }) // Use http instead of https
            .then(result => console.log(result))
            .catch(err => console.log(err));
            document.getElementById('name').value=""
            document.getElementById('email').value=""
            document.getElementById('password').value=""
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    placeholder="Enter your Name"
                    value={name} // Controlled input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                /><br></br>
                <label>Email: </label>
                <input 
                    type="email"
                    placeholder="Enter your Email"
                    value={email} // Controlled input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                /><br></br>
                <label>Password: </label>
                <input 
                    type="password"
                    placeholder="Enter your Password"
                    value={password} // Controlled input
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
