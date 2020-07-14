import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      {/* 包裹两层provider, 谁里谁外没有关系 */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          {/* 创建一个Toggle button用于改变context中的state */}
          <ThemeToggler />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
