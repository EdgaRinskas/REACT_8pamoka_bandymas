// src/App.jsx
import React from 'react';
import './App.css'; // Make sure to include this line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Todos from './pages/Todos';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
