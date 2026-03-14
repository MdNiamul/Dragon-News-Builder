import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>

            <div className="join join-vertical w-full">

                <a
                    href="https://web.facebook.com/niamul.islam.480597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-base-100 join-item justify-start"
                >
                    <FaFacebook className='mr-2' />
                    Facebook
                </a>

                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-base-100 join-item justify-start"
                >
                    <FaInstagram className='mr-2' />
                    Instagram
                </a>

                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-base-100 join-item justify-start"
                >
                    <FaTwitter className='mr-2' />
                    Twitter
                </a>

            </div>
        </div>
    );
};

export default FindUs;