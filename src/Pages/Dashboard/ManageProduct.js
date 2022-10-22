import React, { useEffect, useState } from 'react';
import DeleteService from './DeleteService';


const ManageProduct = () => {

    const [deleteService, setdeleteService] = useState(null)
    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://my-tools-project.herokuapp.com/service`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    

return (
    <div>
        <h1 className='text-4xl'>Manage Order</h1>
        <div className="overflow-x-auto">
            <p className='text-red-800'>After Reload Deleted Product delete From This Page</p>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product ID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map((uOrder, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{uOrder.name}</td>
                            <td>{uOrder._id}</td>
                            <td><label className="btn btn-active" htmlFor="my-modal-6" onClick={()=>setdeleteService(uOrder)}>Delete</label></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {
            deleteService && <DeleteService deleteService={deleteService} setdeleteService={setdeleteService} ></DeleteService>
        }
    </div>
);
};

export default ManageProduct;