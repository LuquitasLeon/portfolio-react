import React from 'react';
import '../styles/Header.css';
import Foto from '../Lucas.jpg';

function Header() {
  return (
    <div className='header'>
      <h1>Lucas Ismael Leon - 61335</h1>
      <img src={Foto} alt="Foto personal" />
    </div>

  );
}

export default Header;