import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import {IconContext} from 'react-icons'
import TokenService from '../api/token.service';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    const toggleSidebar = () => setSidebar(!sidebar)

    useEffect(() => {
        const user = TokenService.getUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={toggleSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={toggleSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <li className="nav-text">
                    <Link to="/">
                        <AiIcons.AiFillHome />
                        <span>Home</span>
                    </Link>
                </li>
                {currentUser && NavbarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>        
                        </li>
                    )
                })}
            </ul>
        </nav>  
        </IconContext.Provider>
    </>
  )
}

export default Navbar
