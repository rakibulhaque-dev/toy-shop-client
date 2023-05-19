import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../Shared/Navbar/Navbar';
import ExtraSection from '../Pages/ExtraSection/ExtraSection';

const ToyDetails = () => {
    const toy = useLoaderData()
    console.log(toy)
    const { _id, photo, rating, toyName, sellerName, price, description, sellerEmail } = toy;

    return (
        <>

            <NavBar></NavBar>
            <div className='container items-center justify-between mx-auto md:flex lg:flex'>
                <div className='gap-5 lg:flex md:flex '>
                    <div>
                        <img className='w-40 h-48' src={photo} alt="" />
                    </div>
                    <div>
                        <p className='text-secondary'>Name: <span className='font-bold'>{toyName}</span> </p>
                        <p className='text-black'>Price: <span className='font-bold'>{price}</span> </p>
                        <p className='text-black'>Rating: <span className='font-bold'>{rating}</span> </p>
                        <p className='text-black'>Seller: <span className='font-bold'>{sellerName}</span> </p>
                        <p className='text-black'>Email: <span className='font-bold'>{sellerEmail}</span> </p>
                        <p className='text-black'>Info: <span className='font-bold'>{description}</span> </p>
                    </div>
                </div>

                <div>
                    <button className='btn btn-secondary'>Buy Now</button>
                </div>
            </div>
        <ExtraSection></ExtraSection>
        </>
    );
};

export default ToyDetails;