import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UpdateToy = () => {
    const {id}  = useParams();
    const [toys, setToys] =useState([])
    console.log(id)
    useEffect(()=>{
        fetch('https://eleven-toy-server.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    
    // update req to server API
    const handleConfirm = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateDoc = { price, quantity, description };
        console.log('updating: ',updateDoc)
        
        fetch(`https://eleven-toy-server.vercel.app/createToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast('Edited successfull')
                    const remaining = data.filter(toy => toy._id !== id)
                    const updated = toys.find(toy => toy._id !== id)
                    const newToys = [updated, ...remaining]
                    setToys(newToys);
                }

            })
    }


    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-center text-secondary'>Update Toy: ID-{id}</h2>
            <ToastContainer></ToastContainer>
            <form onSubmit={handleConfirm}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Update Price" name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" placeholder="Update Quantity" name='quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Update Description" name='description' className="input input-bordered" />
                </div>
                <div className="mt-6 form-control">
                    <input type='submit' value="Confirm" className="btn btn-success" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;