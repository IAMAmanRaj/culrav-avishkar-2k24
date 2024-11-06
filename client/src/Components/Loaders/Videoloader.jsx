import React, { useState, useEffect } from 'react';

const VideoLoader = ({ loading,video }) => {


    return (
        loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                <video className="w-full " autoPlay muted loop preload="auto">
                    <source src={video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    );
};

export default VideoLoader;
