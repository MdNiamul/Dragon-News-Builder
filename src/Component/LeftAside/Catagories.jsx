import React, { use } from 'react';

const catagoryPromise = fetch('/categories.json')
    .then((res) => res.json());

const Catagories = () => {
    const categori = use(catagoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Catagories({categori.length})</h2>
        </div>
    );
};

export default Catagories;