import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;