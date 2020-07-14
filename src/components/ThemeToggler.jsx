import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggler extends Component {
    // static contextType = ThemeContext

    render() {
        return (
            <ThemeContext.Consumer>{context => {
                return (<button onClick={context.toggleTheme}>Toggle Theme</button>)
            }}
            </ThemeContext.Consumer>
        )
    }
}


export default ThemeToggler;