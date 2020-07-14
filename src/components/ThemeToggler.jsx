import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeToggler = () => {
    // static contextType = ThemeContext
    const context = useContext(ThemeContext);
    return (
        <button onClick={context.toggleTheme}>Toggle Theme</button>
    )
}


export default ThemeToggler;