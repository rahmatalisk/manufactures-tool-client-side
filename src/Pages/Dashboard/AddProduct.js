import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const imageStorageKey ="cd60345972a08efd1547656e57e8b045";
    const onSubmit = data => {
        console.log(data)
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result => {
            const img = result.data.url;
            console.log(img)
                const service = {
                    name: data.name,
                    email: data.email,
                    minimum: data.minimum,
                    available: data.available,
                    description: data.description,
                    img: img,
                    price:data.price
                }
                fetch('https://my-tools-project.herokuapp.com/service', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(service)
                })
                .then(res => res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Service added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the Service');
                    }
                })

        })
                
        
    };
    return (
        <div>
            Add Product
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Service Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Service Name is Required'
                                    },
                                    
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Service Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Service Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Service Description is Required'
                                    },         
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <input type="file" placeholder="Password" className="input  w-full max-w-xs"
                                {...register("img", { required: {
                                    value:true,
                                    message:"Service Image is required"
                                },                               
                            })}
                            />
                            <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                            
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs"
                                {...register("price", { required: {
                                    value:true,
                                    message:"Price is Required"
                                },                               
                            })}
                            />
                            <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input type="number" placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs"
                                {...register("minimum", { required: {
                                    value:true,
                                    message:"Minimum Quantity is Required"
                                },                               
                            })}
                            />
                            <label className="label">
                            {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                            
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs"
                                {...register("available", { required: {
                                    value:true,
                                    message:"Available Quantity is Required"
                                },                               
                            })}
                            />
                            <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            
                            </label>
                        </div>
                        
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
                    </form>
        </div>
    );
};

export default AddProduct;