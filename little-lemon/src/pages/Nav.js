import React from 'react';
import './styles.css';
import logo from './logo.jpg';


function Nav() {
    const menuItems = [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Menu', link: '/menu' },
      { text: 'Reservations', link: '/reservations' },
      { text: 'Order online', link: '/order-online' },
      { text: 'Login', link: '/login' },
    ];
  
    return (
      <nav className="container-nav">
        <img src={logo} alt="Little Lemon logo" className="logo-nav" />
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

export default Nav;
