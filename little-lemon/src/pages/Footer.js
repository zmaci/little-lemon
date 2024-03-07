import React from 'react';
import logo2 from './logo2.jpg';
import './styles.css';

const Footer = () => {
  return <footer className='container-footer'>
    <img src={logo2} alt="Little Lemon logo" className="logo-footer" />
            <ul className="footer-item">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul className="footer-item">
                <li><a href="/address">Little Lemon <br />
                                       123 Lemon St <br />
                                       60007 Chicago</a></li>
                <li><a href="/">+1 312 111 1111</a></li>
                <li><a href="/">littlechicago@littlelemon.com</a></li>
            </ul>
            <ul className="footer-item">
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
            </ul>
  </footer>;
};

export default Footer;