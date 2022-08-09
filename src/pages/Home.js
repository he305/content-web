import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

function Home() {
    const isLogin = localStorage.getItem("user");
    const renderAuthButton = () => {
        if (!isLogin) {
            return <Login />;
        } else {
            return <h1>Hello</h1>;
        }
    }

  return (
    <div className="home">
        {renderAuthButton()}
    </div>
  )
}

export default Home