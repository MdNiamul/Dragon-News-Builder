import React from 'react';

const NewsDetailscart = ({news}) => {
   console.log(news);

    return (
        <div>
            <img className='mb-4' src={news.image_url} alt="" />
            <h1 className='text-2xl mb-4'>{news.title}</h1>
        </div>
    );
};

export default NewsDetailscart;