import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-4'>
            <img className='w-[450px]' src={logo} alt="" />
            <p className=''>journalism without Fear or Favour</p>
        </div>
    );
};

export default Header;