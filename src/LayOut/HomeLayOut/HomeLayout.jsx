import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/Header/Header';
import Latest from '../../Component/Header/LatestNews/latest';
import Navbar from '../../Component/Navbar/Navbar';
import LeftAside from '../../Component/LeftAside/LeftAside';
import RightAside from '../../Component/RightAside/RightAside';


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
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;