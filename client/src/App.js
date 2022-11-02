import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Books from './Books'
import Book from './Book';
import BookForm from './BookForm';
import EditBookForm from './EditBookForm';
import { UserProvider } from './context/user'
import ChooseExcerptForm from './ChooseExcerptForm';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/books/:id" element={<Book />} />
          <Route exact path="/books/new" element={<BookForm/>} />
          <Route exact path="/books/:id/edit" element={<EditBookForm/>} />
          <Route exact path="/excerpts/new" element={<ChooseExcerptForm />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
