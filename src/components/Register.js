import React, {useState} from 'react'
import AuthService from '../api/auth.service';

const Register = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await AuthService.register(username, password).then(() => {
                window.location.reload();
            },
            (error) => {
                console.log(error);
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h3>Register</h3>
                <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;