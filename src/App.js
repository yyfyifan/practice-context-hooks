import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import AuthContextProvider from './contexts/AuthContext';
import Songlist from './components/Songlist';
import { BookContextProvider } from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <Navbar />
            <Booklist />
            <ThemeToggler />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>

      <Songlist />
    </div>
  );
}

export default App;
