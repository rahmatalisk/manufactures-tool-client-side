import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../../Sheared/Loading';

const Myorder = () => {
    const [user, loading] = useAuthState(auth);
    const [userOrder, setUserOrder] = useState([])

    useEffect(() => {
        fetch(`https://my-tools-project.herokuapp.com/order/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    return <Loading></Loading>
                }
                setUserOrder(data)
            })
    }, [])
    
    return (
        <div>
            <h1 className='text-2xl'>My Order</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrder.map((uOrder,index) => <tr>
                                <th>{index+1}</th>
                                <td>{uOrder.name}</td>
                                <td>{uOrder.email}</td>
                                <td>{uOrder.productId}</td>
                                <td>{uOrder.number}</td>
                                <td>Unpaid</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;