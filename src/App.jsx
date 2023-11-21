// src/App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Todos from './pages/Todos';
import Todo from './pages/Todo';
import { ThemeProvider } from './ThemeContext'; // Add this line

function App() {
  return (
    <ThemeProvider>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} key="home" />
          <Route path="/users" element={<Users />} key="users" />
          <Route path="/users/:id" element={<User />} key="user" />
          <Route path="/todos" element={<Todos />} key="todos" />
          <Route path="/todos/:id" element={<Todo />} key="todo" />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
