import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 join-item justify-start"> <FaFacebook></FaFacebook> facebook</button>
                    <button className="btn bg-base-100  join-item justify-start"><FaInstagram></FaInstagram> InstraGram</button>
                    <button className="btn bg-base-100  join-item justify-start"><FaTwitter></FaTwitter> witter</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;