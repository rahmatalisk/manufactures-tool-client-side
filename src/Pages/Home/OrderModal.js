import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../../Sheared/Loading';

const OrderModal = ({ order, setOrder }) => {
    const { name, minimum,_id } = order
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (loading) {
            return <Loading></Loading>
        }
        console.log(data)

        const order = {
            name: data.name,
            email: user?.email,
            product: data.product,
            number: data.number,
            productId: _id,
            quantity: data.quantity
        }
        fetch('https://my-tools-project.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Order successfully')
                    setOrder(null)
                    reset();
                }
                else {
                    toast.error('Failed to Order');
                }
            })

    };
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex items-center justify-between'>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <div className="modal-action mt-[-5px]">
                            <label htmlFor="order-modal" className="btn">X</label>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                                value={name}
                                {...register("product")} disabled
                            />
                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                value={user?.email}
                                {...register("email")}
                                disabled
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs"
                                {...register("quantity")}
                                value={minimum}
                            />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" placeholder="Number" className="input input-bordered w-full max-w-xs"
                        {...register("number", {
                            required: {
                                value: true,
                                message: "Number is Required"
                            },
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}

                    </label>
                </div>

                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;