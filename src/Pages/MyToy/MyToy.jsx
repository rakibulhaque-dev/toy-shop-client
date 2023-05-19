import React, { useEffect, useState } from 'react';
import ToyRow from './ToyRow';

const MyToy = () => {
    const [toys, setToys] = useState([])
    console.log(toys)
    useEffect(() => {
        fetch('http://localhost:5000/createToy')
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
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        toys.map(toy => <ToyRow
                        key={toy._id}
                        toy={toy}
                        ></ToyRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;