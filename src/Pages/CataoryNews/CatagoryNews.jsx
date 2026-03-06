import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {

    const catagori = useParams([]);
    console.log(catagori);

    return (
        <div>
            <h2>catagory News</h2>
        </div>
    );
};

export default CatagoryNews;