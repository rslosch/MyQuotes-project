import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Books from './Books'
import { UserProvider } from './context/user'

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
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
