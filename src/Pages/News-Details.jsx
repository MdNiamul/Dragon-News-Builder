import React, { useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import RightAside from '../Component/RightAside/RightAside';
import NewsDetailscart from './NewsDetailscart';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        // eslint-disable-next-line
        setNews(newsDetails);
    }, [id, data]);

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 py-3 '>

                <section className='col-span-9 py-5 px-7'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailscart news={news}></NewsDetailscart>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;