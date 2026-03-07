import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../NewsCart';

const CatagoryNews = () => {

    const [categoryNews, setcategoryNews] = useState([]);

    const { id } = useParams([]);
    const data = useLoaderData();
    // console.log(id, data);

    useEffect(() => {
        if (id == 0) {
            // eslint-disable-next-line
            setcategoryNews(data);
            return;
        } else if (id == "1") {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setcategoryNews(filterNews);
        } else {
            const filterNews = data.filter(news => news.category_id == id);
            // console.log(filterNews);
            setcategoryNews(filterNews);
        }

    }, [data, id]);

    return (
        <div className='place-items-center'>
            <h2 className='font-bold items-center place-center mb-5'>Total
                <span className='text-secondary'>
                   ( {categoryNews.length})
                </span>News Found
            </h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news) => <NewsCart key={news.id} news={news}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CatagoryNews;