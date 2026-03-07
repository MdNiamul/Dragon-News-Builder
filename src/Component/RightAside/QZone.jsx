import React from 'react';
import swimming from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playIg from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='gap-5'>
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playIg} alt="" />
            </div>
        </div>
    );
};

export default QZone;