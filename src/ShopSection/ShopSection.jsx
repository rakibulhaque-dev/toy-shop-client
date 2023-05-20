import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';

const ShopSection = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://eleven-toy-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <h3 className='text-4xl text-center'>TotalToys: {toys.length}</h3>


            <div className='container grid-cols-3 gap-4 mx-auto md:grid lg:grid'>
                {
                    toys.map(singleToy=> <SingleToy
                    key={singleToy._id}
                    singleToy={singleToy}
                    
                    ></SingleToy>)
                }
            </div>

        </div>
    );
};

export default ShopSection;