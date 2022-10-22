import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../../Sheared/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const notify = () => toast("Succesfully Registerd!");
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathName || '/'
    const onSubmit = data => {
        const name = data?.name || user?.displayName
        const em = user?.email || data?.email;
        const email = {email:em,name:name}
        console.log(data)
        fetch('https://my-tools-project.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(inserted => {
               
            })
        console.log(user)
        createUserWithEmailAndPassword(data.email, data.password)
        if (loading || gLoading) {
            return <Loading></Loading>
        }
        if (user) {
            user.displayName = data.name
        }
        if (user || gUser) {
            console.log(data.email)

            navigate(from, { replace: true } || "/")
            notify()

        }


    };
    return (
        <div className='md:px-20  h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h4 className='text-2xl font-bold text-center mb-5'>Registation</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
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
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 length"
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p>Already Registerd? <Link to='/login' className='text-primary'>Login</Link></p>
                        {
                            error && <p className='text-[red]'>{error.message}</p>
                        }
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Sign Up" />
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;