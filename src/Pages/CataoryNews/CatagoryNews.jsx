import React from 'react';
import { useParams } from 'react-router';

const CatagoryNews = () => {

    const {id} = useParams([]);
    console.log(id);

    return (
        <div>
            <h2>catagory News{id}</h2>
        </div>
    );
};

export default CatagoryNews;