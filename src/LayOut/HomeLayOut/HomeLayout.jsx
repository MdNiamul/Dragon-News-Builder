import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/Header/Header';
import Latest from '../../Component/Header/LatestNews/latest';
import Navbar from '../../Component/Navbar/Navbar';


const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <Latest></Latest>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;