import React from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../../Hooks/UseAdmin';

const AdminRow = ({ user, index }) => {
    const { name, email } = user;
    const [adminData] = useAdmin(user);
   
    
    const handleMakeAdmin = () => {
        const admin = {email:email,role:"admin",name:name}
        console.log(admin)
        fetch('https://my-tools-project.herokuapp.com/admins', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Admin added successfully')
                }
                else {
                    toast.error('Failed to add Admin');
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            {
               adminData?.email !== email &&  <td><label className="btn btn-active" onClick={() => handleMakeAdmin(email)} htmlFor="my-modal-6" >Make Admin</label></td>
               
            //    <td><label className="btn btn-outline" onClick={() => useDeleteAdmin(user)} htmlFor="my-modal-6" >Delete Admin</label></td>
            }
            
        </tr>
    );
};

export default AdminRow;