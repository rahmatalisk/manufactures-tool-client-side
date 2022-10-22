import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reveiws = () => {
    const [reviews,SetReviews] = useState([])
    useEffect(()=>{
        fetch("https://my-tools-project.herokuapp.com/review")
        .then(res => res.json())
        .then(result => SetReviews(result))
    },[])
    return (
        <div className='md:px-20 py-10 bg-base-100'>
            <h1 className='text-4xl text-center mb-5 font-bold uppercase'>Our User Says</h1>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-x-10 gap-y-5 '>
                {
                    reviews.slice(-3).map(review => <ReviewCard key={review._id}review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reveiws;