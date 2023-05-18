import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ singleToy }) => {

    const {_id, toyName, sellerName, sellerEmail, price, rating, quantity, description, photo } = singleToy;
    return (
        <div className='mb-3 shadow-lg card'>
            <div className='card-body'>
                <img src={photo} alt="" />
                <p>Name: {toyName}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Seller: {sellerName}</p>
                <Link to={`/toydetails/${_id}`}>View Details</Link>
            </div>
        </div>
    );
};

export default SingleToy;