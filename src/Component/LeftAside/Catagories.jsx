import React, { use } from 'react';
import { NavLink } from 'react-router';

const catagoryPromise = fetch('/categories.json')
    .then((res) => res.json());

const Catagories = () => {
    const categori = use(catagoryPromise);
    return (
        <div>
            <h2 className='font-bold'>All Catagories({categori.length})</h2>
            <div className='grid grid-cols-1 mt-3 gap-3'>
                {
                    categori.map((catag) => (
                        <NavLink key={catag.id} className={"btn bg-base-100 border-0 hover:bg-base-300 font-semi-bold text-accent"}
                        to={`/catagory/${catag.id}`}
                        >
                            {catag.name}
                        </NavLink>))
                }
            </div>
        </div>
    );
};

export default Catagories;