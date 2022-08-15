import React, {useState} from 'react'
import AuthService from '../api/auth.service';
import './Login.css'

const Login = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[isError, setisError] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password).then(() => {
                window.location.reload();
            },
            (error) => {
                setisError(true)
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-box">
            <form onSubmit={handleRegister}>
                <h3>Login</h3>
                <br />
                <div className='user-box'>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label>Username</label>
                </div>
                
                <div className='user-box'>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label>Password</label>
                </div>
                <button type="submit">Login</button>
                {isError && 
                <span className='user-error'>Account doesn't exist</span>}
            </form>
        </div>
    )
}

export default Login;