import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';
import ShopRow from './ShopRow';

const ShopSection = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://eleven-toy-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ShopRow
                            key={toy._id}
                            toy={toy}
                            ></ShopRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShopSection;