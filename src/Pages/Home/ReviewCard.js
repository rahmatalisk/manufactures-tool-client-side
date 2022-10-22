import React from 'react';

const ReviewCard = ({review}) => {
    const {description,name,rating} = review 
    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl border">
                    <div className="avatar mx-auto py-5 ">
                        <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className="card-actions">
                            <p>Rating: <span className='text-orange-600 font-bold'>{rating} stars</span></p>
                        </div>
                    </div>
                </div>
    );
};

export default ReviewCard;