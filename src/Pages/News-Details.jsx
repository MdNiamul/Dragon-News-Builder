import React from 'react';
import Header from '../Component/Header/Header';
import RightAside from '../Component/RightAside/RightAside';
import NewsDetailscart from './NewsDetailscart';

const NewsDetails = () => {
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-3 '>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailscart></NewsDetailscart>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;