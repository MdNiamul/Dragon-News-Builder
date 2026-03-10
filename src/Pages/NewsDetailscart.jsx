import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const NewsDetailscart = () => {
    const data =  useLoaderData();
    const {id} = useParams();

    console.log(data, id);
    
    return (
        <div>
            <h1>akffhgkdj</h1>
        </div>
    );
};

export default NewsDetailscart;