import React, {useEffect} from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import Logout from '../components/Logout'
import './Home.css'

function Home() {
    const isLogin = localStorage.getItem("user");

    useEffect(() => {
        document.title = "Home";
    }, [])

    const renderAuthButton = () => {
        if (!isLogin) {
            return (
                <div className='login-register-box'>
                    <Login />
                    <Register />
                </div>
            );
        } else {
            return <div>
                <h1>Hello</h1>
                <Logout />
                </div>;
        }
    }

  return (
    <div className="home">
        {renderAuthButton()}
    </div>
  )
}

export default Home