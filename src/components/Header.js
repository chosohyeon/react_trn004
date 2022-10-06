import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../pages/NavMenu';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='Header '>
      <div className='top_menu'>
        <ul className='rt inner'>
          <li>Login</li>
          <li>Join</li>
          <li><FiShoppingCart /></li>
          <li>My page</li>
          <li><FiSearch /></li>
        </ul>
      </div>
      <div className='menu'>
        <h1>
          <Link to='/'>
            <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt='' />
          </Link>
        </h1>
        <nav>
          <NavMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header