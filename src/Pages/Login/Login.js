import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../../Sheared/Loading';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
      const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
      const notify = () => toast("Succesfully Login!");
      const navigate = useNavigate() 
      const [email,setEmail] = useState()
    const onSubmit = data => {
        setEmail(data.email)
        console.log(data)
        signInWithEmailAndPassword(data.email,data.password)
        if(loading || gLoading){
            return <Loading></Loading>
        }
        if(user || gUser){
            navigate("/")
            notify()
        }
    };
    const resetNotify = ()=> toast("Reset Email Send.Please Check!")
    const handlePasswordReset=()=>{
        sendPasswordResetEmail(email)
        if(sending){
            <Loading></Loading>
        }
        resetNotify()
    }
    return (
        <div className='md:px-20  h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h4 className='text-2xl font-bold text-center mb-5'>Login</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {...register("password", { required: {
                                    value:true,
                                    message:"Password is required"
                                },
                                minLength:{
                                    value:6,
                                    message:"Password must be 6 length"
                                }
                            
                            })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p>New to E-tools? <Link to='/registation' className='text-primary'>Register</Link></p>
                        <p className='text-primary cursor-pointer' onClick={handlePasswordReset}>Forgot Password?</p>
                        {
                            error && <p className='text-[red]'>{error.message}</p>
                        }
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Login" />
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={()=>signInWithGoogle()}>Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;