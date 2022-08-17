import React, {useState} from 'react'
import AuthService from '../api/auth.service';
import * as Yup from "yup";
import './Register.css';

const Register = () => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[errorMessage, setErrorMessage] = useState({
        message: "",
        isLoading: false
    })

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage({
            message: "",
            isLoading: false
        })

        let schema = Yup.object().shape({
            usernameField: Yup.string()
              .required("Username field is requierd")
              .min(5, "Username is too short - should be 5 chars minimum"),
            passwordField: Yup.string()
              .required("Password field is requierd")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number.")
          })

          schema.validate({
            usernameField: username,
            passwordField: password
          }).then(async (valid) => {
            await AuthService.register(username, password).then(() => {
                window.location.reload();
            },
            (error) => {
                setErrorMessage({
                    message: error.response.data.message,
                    isLoading: true
                });
            });
          })
          .catch((error) => {
            setErrorMessage({
                message: error.message,
                isLoading: true
            })
          })
    };

    return (
        <div className='register-box'>
            <form onSubmit={handleRegister}>
                <h3>Register</h3>
                <br />
                <div className='user-box'>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label>Username</label>
                </div>
                
                <div className='user-box'>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label>Password</label>
                </div>
                <button type="submit">Register</button>
            </form>
            {errorMessage.isLoading &&
            <span className='user-error'>{errorMessage.message}</span>}
        </div>
    )
}

export default Register;