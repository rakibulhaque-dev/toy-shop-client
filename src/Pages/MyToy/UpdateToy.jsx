import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateToy = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-center text-secondary'>Update Toy: ID-{id}</h2>

            <form>
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
            </form>
        </div>
    );
};

export default UpdateToy;