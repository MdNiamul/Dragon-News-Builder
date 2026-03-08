import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from "../../assets/user.png"
import { AuthContext } from '../../AuthProvide/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext);
    console.log(user);
    return (
        <div className='flex justify-between items-center'>
            <div className="div"></div>
            <div className="div flex gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={userimg} alt="" />
               <Link to="/auth/login"> <button className='btn btn-primary px-10'> Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;