import React from 'react'
import AuthService from '../api/auth.service';
import './Logout.css'

const Logout = () => {
    const handleLogout = async (e) => {
        e.preventDefault();
        AuthService.logout();
        window.location.reload();
    };

    return (
        <div className='logout-box'>
            <form onSubmit={handleLogout}>
                <button className="logout-button" type="submit">Logout</button>
            </form>
        </div>
    )
}

export default Logout;