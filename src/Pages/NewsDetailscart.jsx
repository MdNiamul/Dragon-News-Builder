import React from 'react';
import { Link } from 'react-router';

const NewsDetailscart = ({news}) => {
   console.log(news);

    return (
        <div className='space-y-4'>
            <img className='w-full h-[350px] rounded-2xl object-cover mb-4' src={news.image_url} alt="" />
            <h1 className='text-2xl mb-4'>{news.title}</h1>
            <h2>{news.details}</h2>
            <Link className='btn btn-secondary ' to={`/catagory/${news.category_id}`}>back to category</Link>
        </div>
    );
};

export default NewsDetailscart;