import React from 'react';

const ServiceCard = ({service,setOrder}) => {
    const {price,description,name,img,minimum,available} = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-justify">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-red-400'>Available Quantity: <span className='text-[#002d80] font-bold'>{available}</span></p>
                <p className='text-red-400'>Minimum Quantity: <span className='text-[#002d80] font-bold'>{minimum}</span></p>
                <p>Price: $<span className='text-red font-bold'>{price}</span></p>
                <div className="card-actions">
                    <label className="btn btn-primary" onClick={()=>setOrder(service)} htmlFor="order-modal">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;