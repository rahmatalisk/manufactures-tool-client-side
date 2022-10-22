import React from 'react';

const DeleteService = ({deleteService,setdeleteService}) => {

const handleDeleteConfirm = ()=>{
    fetch(`https://my-tools-project.herokuapp.com/service/${deleteService._id}`)
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        setdeleteService(null)
    })
}
    return (

        <div>           
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <div className="modal-action ml-auto">
                        <label htmlFor="my-modal-6" className="btn">X</label>
                    </div>
                    <h3 className="font-bold text-lg">{deleteService.name}</h3>
                    <p className="py-4">Are You Sure Delete It?</p>
                    <button className="btn btn-outline" onClick={handleDeleteConfirm}>Confirm</button>
                    
                </div>
            </div>
        </div>
    );
};

export default DeleteService;