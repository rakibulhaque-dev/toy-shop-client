import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy, handleDelete }) => {
    const { photo, toyName, sellerName, price, _id } = toy;
    

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                    </div>
                </div>
            </td>
            <td>{sellerName}</td>
            <td>{price}</td>
            <th>
                <Link to={`/update/${_id}`} className="rounded-md btn-secondary btn-sm">Edit</Link>
            </th>
            <th>
                <button className="btn btn-error btn-sm" onClick={()=>handleDelete(_id)}>
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default ToyRow;
