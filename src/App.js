import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Movies from './Movies';
import RegisteredUsers from './RegisteredUsers';
import CompanyInfo from './CompanyInfo';
import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/registered-users">Registered Users</Link></li>
          <li><Link to="/company-info">Company Info</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/registered-users" element={<RegisteredUsers />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/" element={<h1>Welcome to Our Application</h1>} />
      </Routes>
    </>
  );
}

export default App;