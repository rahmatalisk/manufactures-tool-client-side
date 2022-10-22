import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='py-20 md:px-20 '>
            <h1 className='text-5xl text-center font-bold text-[#00A9A9] uppercase'>Millions Business Trust Us</h1>
            <h1 className='text-2xl text-center font-bold mt-5 uppercase'>Try To Understand User Expectation</h1>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-8  mx-auto w-full mt-10 drop-shadow-2xl">

                <div className="flex justify-center items-center flex-col shadow-xl p-5 rounded-xl">
                    <div className="stat-value">20+</div>
                    <div className="text-2xl text-[#00A9A9] ">Countries</div>
                </div>
                <div className="flex justify-center items-center flex-col shadow-xl p-5 rounded-xl">
                    <div className="stat-value">200+</div>
                    <div className="text-2xl text-[#00A9A9] ">Pojects</div>
                </div>
                <div className="flex justify-center items-center flex-col shadow-xl p-5 rounded-xl">
                    <div className="stat-value">550+</div>
                    <div className="text-2xl text-[#00A9A9] ">Happy Clients</div>
                </div>
                <div className="flex justify-center items-center flex-col shadow-xl p-5 rounded-xl">
                    <div className="stat-value">400+</div>
                    <div className="text-2xl text-[#00A9A9] ">Feedback</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;