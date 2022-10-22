import React, { useState } from 'react';
import AdminRow from './AdminRow';


const Admin = () => {
    const [users ,setUser] = useState([])
    fetch('https://my-tools-project.herokuapp.com/user', {
        method: 'GET',
        headers:{
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    .then(data => setUser(data))
   
    
    
    return (
        <div>
            <h1 className="text-2xl">Admin</h1>
            <p className='text-red-800'>After Reload Make User Admin Added</p>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, index) => <AdminRow key={index} user={u} index={index} ></AdminRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Admin;