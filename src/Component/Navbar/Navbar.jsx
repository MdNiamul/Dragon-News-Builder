import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from "../../assets/user.png"
import { AuthContext } from '../../AuthProvide/AuthProvider';
// import button from 'daisyui/components/button';

const Navbar = () => {


    const { user, logOut } = use(AuthContext);
    console.log(user);

    const HandleLogout = () => {
        console.log("clicked");
        logOut().then(() => {
            alert("logout succesfuly");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div>
                {
                    user ? (
                        <p className="font-semibold text-green-600">
                            {user.email}
                        </p>
                    ) : (
                        <p className="text-red-500">Not Logged In</p>
                    )
                }
            </div>
            <div className="div flex gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={userimg} alt="" />
                {
                    user ?
                        (
                            <button onClick={HandleLogout} className='btn btn-primary px-10'> Logout</button>
                        )
                        :
                        (
                            <Link to="/auth/login"> <button className='btn btn-primary px-10'> Login</button></Link>
                        )
                }
            </div>
        </div>
    );
};

export default Navbar;