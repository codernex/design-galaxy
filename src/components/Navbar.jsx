import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import './navbar.scss';
import contactIcon from '../assets/icon/contact.svg';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const nav = document.querySelector('.nav-links');
  const Line = document.querySelector('.line');

  const menuBtn = () => {
    nav.classList.toggle('nav-show');
    Line.classList.toggle('toggle');
  };

  return (
    <div className='container'>
      <header className='header'>
        <nav>
          <div className='logo'>
            <NavLink to='/'>
              <img src={logo} alt='Logo' />
            </NavLink>
          </div>
          <ul className={'nav-link ' + (menuOpen && 'nav-show')}>
            <li>
              <NavLink activeStyle={{ color: '#f75f96' }} to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#f75f96' }} to='/how-we-work'>
                How We Work?
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#f75f96' }} to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#f75f96' }} to='/projects'>
                Projects
              </NavLink>
            </li>
          </ul>
          <div
            className={'burger ' + (menuOpen && 'toggle')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={'line1 '}></div>
            <div className={'line2 '}></div>
            <div className={'line3 '}></div>
          </div>
          <button>
            <img src={contactIcon} alt='' />
            <NavLink to='/contact'>Contact</NavLink>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
