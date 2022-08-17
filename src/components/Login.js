import React, {useState} from 'react'
import AuthService from '../api/auth.service';
import './Login.css'

const Login = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[errorMessage, setErrorMessage] = useState({
        message: "",
        isLoading: false
    })

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage({
            message: '',
            isLoading: false
        })
        try {
            await AuthService.login(username, password).then(() => {
                window.location.reload();
            },
            (error) => {
                setErrorMessage({
                    message: error.response.data.message,
                    isLoading: true
                })
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
            </form>
            {errorMessage.isLoading && 
            <span className='user-error'>{errorMessage.message}</span>}
        </div>
    )
}

export default Login;