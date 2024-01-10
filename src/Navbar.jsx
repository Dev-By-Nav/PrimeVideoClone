import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? 'fixed top-0 bg-[#1399ff] w-full md:h-12 z-50' : 'bg-[#1399ff] md:h-20 z-50'
      } flex flex-col md:flex-row items-center px-5 md:px-10 transition duration-300 ease-in-out`}
    >
      <div className='cursor-pointer '>
        <img src={logo} alt="" className={`${
        isSticky ? 'h-12':' h-20'
      }`} />
      </div>

      <div className='flex pb-4 md:pb-0 justify-center md:justify-end w-full '>
        <ul className='flex flex-row cursor-pointer '>
          <li className='font-semibold px-4 hover:text-white transition duration-300 ease-in-out'>
            Home
          </li>
          <li className='font-semibold px-4 hover:text-white transition duration-300 ease-in-out'>
            Store
          </li>
          <li className='font-semibold px-4 hover:text-white transition duration-300 ease-in-out'>
            Live Tv
          </li>
          <li className='font-semibold px-4 hover:text-white transition duration-300 ease-in-out'>
            Categories
          </li>
          <li className='font-semibold px-4 hover:text-white transition duration-300 ease-in-out'>
            My Stuff
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
