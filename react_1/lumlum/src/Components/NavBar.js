import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS for styling

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/study-deck">Study Deck</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}