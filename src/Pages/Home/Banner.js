import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url(https://i.ibb.co/zG1G80W/banner2.jpg)]" alt>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Although many animals use simple tools, only human beings, whose use of stone tools dates back hundreds of millennia, have been observed using tools to make other tools. Early tools, made of such materials as stone, bone, and wood, were used for preparation of food, hunting, manufacture of weapons, and working of materials to produce clothing and useful artifacts.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;