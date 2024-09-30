import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = ({ toggleCartVisibility }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };
  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };
  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the Signup page
  };
  return (
    <div className='bg-cement h-[80px] max-w-[1600px] mx-auto flex justify-between items-center'>
      <p className='text-2xl md:text-3l font-bold primary-color ml-4'>EatEase🍔</p>
      
      <button onClick={toggleCartVisibility} className='p-3 my-auto text-xl text-orange-700'>
        <AiOutlineShoppingCart size={40} />
      </button>
      <ul className='hidden md:flex'>
      <li className='p-3'>
      <button className='rounded-lg before:ease relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl' onClick={handleHomeClick}>
          <span relative="relative z-10">Home</span>
        </button>
        </li>
        <li className='p-3'>
          <a href='#food'>
            <button className='rounded-lg before:ease relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl'>
              <span relative="relative z-10">Food</span>
            </button>
          </a>
        </li>
        <li className='p-3'>
          <a href='#download'>
            <button className='rounded-lg before:ease relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl'>
              <span relative="relative z-10">Download</span>
            </button>
          </a>
        </li>
        <li className='p-3'>
        <button className='rounded-lg before:ease relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl' onClick={handleSignupClick}>
          <span relative="relative z-10">Sign up</span>
        </button>
        </li>
        <li className='p-3'>
          <button
            className='rounded-lg before:ease relative h-8 w-20 overflow-hidden border border-orange-500 bg-primary-color text-white shadow-2xl'
            onClick={handleLoginClick} // Navigate to login page on click
          >
            <span relative="relative z-10">Log In</span>
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mr-6 z-20'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'z-30 fixed right-0 h-full top-[120px] w-full ease-in-out duration-500' : 'fixed top-[-100%]'}>
        <ul className='p-8 text-2xl w-full bg-primary-color rounded-lg text-white'>
        <li className='p-5'><a href='#' onClick={handleHomeClick}>Home</a></li>
          <li className='p-5'><a href='#food'>Food</a></li>
          <li className='p-5'><a href='#download'>Download</a></li>
          <div className='flex gap-4'>
            <button className='rounded-lg h-12 w-28 bg-orange-900 text-white shadow-2xl' onClick={handleLoginClick}>
              <span relative="relative z-10">Log In</span>
            </button>
            <button className='rounded-lg h-12 w-28 bg-orange-900 text-white shadow-2xl' onClick={handleSignupClick}>
              <span relative="relative z-10">Sign up</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
