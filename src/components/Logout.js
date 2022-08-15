import React from 'react'
import AuthService from '../api/auth.service';

const Logout = () => {
    const handleLogout = async (e) => {
        e.preventDefault();
        AuthService.logout();
        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={handleLogout}>
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}

export default Logout;