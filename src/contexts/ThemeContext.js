import React, { createContext, Component } from 'react';

// 创建Context
// 然后通过它来创建Context的Wrapper component
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    }

    // 自己提供改变内部状态的方法
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    render() {
        return (
            // 通过创建的themecontext对象的Provider来创建一个Wrapper
            // 将需要和context交互的组件都包裹起来
            // value属性指定它们可以交互的数据, 这里将这个component的state当做数据
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider