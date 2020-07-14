import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => {
    const authContext = useContext(AuthContext);
    const themeContext = useContext(ThemeContext);

    const { isAuthenticated, toggleAuth } = authContext;
    const { isLightTheme, light, dark } = themeContext;
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
            <h1>Reading List</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>)
}


export default Navbar;