import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
    // 通过static属性直接访问到这个 context
    // 它会从Component tree向上找，找到第一个包含这个context的provider
    // 然后就可以获取其value属性包含的数据
    // 之后就可以通过this.context获取数据
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div className="book-list" style={{backgroundColor: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{backgroundColor: theme.ui}}>Journey to the West</li>
                    <li style={{backgroundColor: theme.ui}}>Three Kingdoms</li>
                    <li style={{backgroundColor: theme.ui}}>Game of Throne</li>
                </ul>
            </div>
        )
    }
}

export default Booklist;