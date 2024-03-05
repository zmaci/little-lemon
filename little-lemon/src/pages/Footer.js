import React from 'react';

const Footer = () => {
  return <footer>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            <ul>
                <li><a href="/address">Little Lemon <br />
                                       123 Lemon St <br />
                                       60007 Chicago</a></li>
                <li><a href="/">+1 312 111 1111</a></li>
                <li><a href="/">littlechicago@littlelemon.com</a></li>
            </ul>
            <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
            </ul>
  </footer>;
};

export default Footer;