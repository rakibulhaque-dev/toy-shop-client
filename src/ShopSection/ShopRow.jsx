import React from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';


const ShopRow = ({ toy, loading }) => {

    const { _id, photo, sellerName, toyName, category, quantity, price } = toy;

    return (


        <>

            {loading ? (
                <div className="flex items-center justify-center h-32">
                    <BeatLoader color="#36d7b7" />
                </div>
            ) : (
                <>
                    <tr className='container mx-auto' data-aos='fade-up'>
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
                        <td>
                            {sellerName}
                        </td>
                        <td>
                            {price}
                        </td>
                        <td>
                            {quantity}
                        </td>
                        <td>
                            {'category'}
                        </td>
                        <th>
                            <Link to={`/toydetails/${_id}`} className='btn btn-sm btn-secondary'>View Details</Link>
                        </th>
                    </tr>
                </>
            )}
        </>




    );
};

export default ShopRow;