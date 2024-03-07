import React from 'react';
import './styles.css';
import hero from './hero.jpg';

const Header = () => {
  return (
  <header className='container-header'>
    <p>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt odio eget ex vestibulum, id tristique risus hendrerit. Maecenas vitae orci
      ac justo sollicitudin fermentum. Nulla facilisi. Fusce convallis turpis nec mauris tincidunt, at consectetur elit fringilla. Nunc eget metus et lectus
      tristique venenatis a eu ligula. Suspendisse potenti.</h3>
      <button className='button-reserve'>Reserve a Table</button>
      </p>
    <img src={hero} alt="Little Lemon hero" className="logo-header"/>
    </header>
  );
};

export default Header;