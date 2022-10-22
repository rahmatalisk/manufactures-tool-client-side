import React, { useEffect, useState } from 'react';
import OrderModal from './OrderModal';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [order,setOrder] = useState(null)
    const [services ,setService]= useState([])
    useEffect(()=>{
        fetch("https://my-tools-project.herokuapp.com/service")
        .then(res => res.json())
        .then(result => {
            setService(result)
        })
    },[])
    console.log(order)
    return (
        <div className='py-12 md:mx-20'>
            <h1 className="text-4xl text-center font-bold">Our Product</h1>
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                {
                    services.map(service => <ServiceCard key={service._id} setOrder={setOrder} service={service}></ServiceCard>)
                }
            </div>
            
                {
                    order && <OrderModal order={order} setOrder={setOrder}></OrderModal>
                }
            
        </div>
    );
};

export default Services;