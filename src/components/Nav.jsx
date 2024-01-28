import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='padding-x absolute bg-opacity-30 z-10 w-full py-8'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={120} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex justify-center items-center gap-16'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-500 '>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign in and Explore now links */}
        <div className='hidden md:flex gap-2 text-lg leading-normal font-medium font-montserrat mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>

        {/* Mobile Navigation */}
        <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden font-bold fixed right-4 ' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

        </div>

        {/* Mobile Navigation Menu */}
        {nav && (
          <ul className='flex flex-col md:hidden justify-center fixed right-0 w-screen min-h-screen top-0 cursor-pointer bg-black'>
            {navLinks.map((items) => (
              <li key={items.label} className='my-7 text-center '>
                <a href={items.href} className='font-montserrat leading-normal text-lg  text-coral-red font-semibold hover:text-red-800'  onClick={handleNav}>
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
        )}

      </nav>
    </header>
  );
};

export default Nav;
