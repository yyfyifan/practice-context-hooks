import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    render() {
        return (
            // ThemeContext.Consumer包裹起来，是另外一种访问context的方式
            // 需要在内部提供一个arrow function, 将渲染结果作为返回值
            // 这种方式也是一种访问context的形式，它的优点在于可以同时引入不同context的consumers使用
            // 并且这种方式在functional component中也可以，而contextType方式则只能在class component使用
            <AuthContext.Consumer>{authContext =>
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (<nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
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
                }}

                </ThemeContext.Consumer>
            }
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;