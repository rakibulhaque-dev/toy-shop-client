import React, { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import { AuthContext } from '../../providers/AuthProvider';

const MyToy = () => {
    const [toys, setToys] = useState([])
    const {user} = useContext(AuthContext)
    console.log(user)
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