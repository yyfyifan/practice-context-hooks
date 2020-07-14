import React from 'react';
import { BookContextProvider } from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <div className="container">
          <Navbar />
          <BookList />

          <BookForm />
        </div>
      </BookContextProvider>
    </div>
  );
}

export default App;
