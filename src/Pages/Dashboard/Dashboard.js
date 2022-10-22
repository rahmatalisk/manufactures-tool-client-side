import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/UseAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);

    const [adminData] = useAdmin(user);
    return (
        <div className='grid md:grid-cols-8  md:px-20 py-12'>
            <div className="lg:col-span-1 md:col-span-2">
                {
                    adminData ? <ul className="p-4 bg-base-200 flex gap-x-8 md:flex-col">
                        <li className="my-5 text-center "><CustomLink to="allorder" >Manage All Orders</CustomLink></li>
                        <li className="my-5 text-center"><CustomLink to="addproduct">Add Product</CustomLink></li>
                        <li className="my-5 text-center"><CustomLink to="admin">Make Admin</CustomLink></li>
                        <li className="my-5 text-center"><CustomLink to="manageproduct">Manage All Product</CustomLink></li>
                        <li className="text-center my-5 "><CustomLink to="/dashboard/profile">My Profile</CustomLink></li>
                    </ul>
                    : <ul className="p-4 bg-base-200 flex gap-x-8 md:flex-col">
                    <li className="my-5 text-center "><CustomLink to="/dashboard" >My Order</CustomLink></li>
                    <li className="my-5 text-center"><CustomLink to="/dashboard/review">Add Reviews</CustomLink></li>
                    <li className="text-center my-5 "><CustomLink to="/dashboard/profile">My Profile</CustomLink></li>
                </ul>
                }
               
            </div>
            <div className='md:col-span-5 lg:col-span-7 pl-10'>
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
        </div>

    );
};
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ""}
        </div>
    );
}
export default Dashboard;