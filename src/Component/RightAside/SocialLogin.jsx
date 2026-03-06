import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h3 className='font-bold mb-3 '>Login With</h3>
            <div className="space-y-3">
                <button className='btn w-full btn-outline btn-secondary'>Login With Google</button>
                <button className='btn w-full btn-outline btn-primary'>Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;