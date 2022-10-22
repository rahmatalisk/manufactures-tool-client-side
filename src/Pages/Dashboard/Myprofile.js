import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../../Sheared/Loading';

const Myprofile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl">My profile</h1>
            <div className='gap-y-5 text-xl'>
                <p>Name: <input type="text" placeholder="Enter Your Name" value={user?.user?.displayName} className="input w-full max-w-xs my-3"/></p>
                <p>Email: <input type="text" placeholder="Type here" value={user?.email} className="input w-full max-w-xs my-3"  disabled /></p>
                <p>Country: <input type="text" placeholder="Enter Your Country" className="input w-full max-w-xs my-3" /></p>
                <p>Exam: <input type="text" placeholder="Your Last Exam"  className="input w-full max-w-xs my-3" /></p>
            </div>
        </div>
    );
};

export default Myprofile;