import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy, handleDelete , toys}) => {
    
    const { photo, toyName, sellerName, price, _id, quantity } = toy;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{toyName}</div>
                </div>
            </td>
            <td>{sellerName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>Action</td>
           
            <th className='mx-auto'>
                <Link to={`/update/${_id}`} className="mr-2 rounded-md btn btn-success btn-sm">Edit</Link>
                <button className="btn btn-error btn-sm" onClick={() => handleDelete(_id)}>
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default ToyRow;
