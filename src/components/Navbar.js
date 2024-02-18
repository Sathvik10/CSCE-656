// Navbar.js

import React from 'react';
import '../styling/Navbar.css'; // Import a separate CSS file for styling

const baseUrl = "/CSCE-656"
function Navbar() {
  return (
    <nav className="navbar flex justify-center bg-neutral-900/50 p-4 backdrop-blur gap-x-8">
      <ul className="nav-list text-white">
        <li className="nav-item">
          <a href={baseUrl + '/#home'}>Home</a>
        </li>
        <li className="nav-item">
          <a href={baseUrl + '/#about'}>About</a>
        </li>
        <li className="nav-item">
          <a href={baseUrl + '/#HW1'}>HW1</a>
        </li>
        <li className="nav-item">
          <a href={baseUrl + '/#HW2'}>HW2</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
