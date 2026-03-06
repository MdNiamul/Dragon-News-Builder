import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="div"></div>
            <div className="div flex gap-5 text-accent">
                <NavLink t0='/'>Home</NavLink>
                <NavLink t0='/about'>About</NavLink>
                <NavLink t0='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'> Login</button>
            </div>
        </div>
    );
};

export default Navbar;