import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/tv">TV shows</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
)

export default Header;
