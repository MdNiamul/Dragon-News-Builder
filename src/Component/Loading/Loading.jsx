import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <span className="loading loading-infinity loading-xl text-primary"></span>
        </div>
    );
};

export default Loading;