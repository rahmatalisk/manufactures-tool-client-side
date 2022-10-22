import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../../Sheared/Loading';

const Myreviews = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        if(loading){
            return <Loading></Loading>
        }

        const review = {
            name: data.name,
            email: user?.email,
            description: data.description,
            rating: data.rating
        }
        fetch('https://my-tools-project.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the Review');
                }
            })



    };
    return (
        <div>
            <h1 className="text-2xl">Add Reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <span className="label-text">Review Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Review Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Review Description is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" placeholder="Rating" className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: "Rating is Required"
                            },
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Myreviews;