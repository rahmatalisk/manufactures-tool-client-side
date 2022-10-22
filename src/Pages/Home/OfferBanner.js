import React from 'react';

const OfferBanner = () => {
    return (
        <div class=" hero bg-base-200 md:px-20 py-12 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img className='w-96 shadow-lg rounded-3xl' src="https://i.ibb.co/ryFWhSs/b9b16d638bd4fc9ae512b4306ff668a3.jpg" class="max-w-sm rounded-lg shadow-2xl"alt='' />
            <div>
                <h1 class="text-5xl font-bold">Our New Product!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
    </div>
    );
};

export default OfferBanner;