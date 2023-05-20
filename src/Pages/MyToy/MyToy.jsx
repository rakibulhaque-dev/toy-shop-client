import React, { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';

const MyToy = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://eleven-toy-server.vercel.app/createToy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleDelete = (id) => {

        const proceed = confirm('Are you sure ?')
        if (proceed) {
            fetch(`https://eleven-toy-server.vercel.app/createToy/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Toy deleted:', data);
                    if(data.deletedCount > 0){
                        alert('Deleted successfull...')
                        const remaining = toys.filter(toy => toy._id !== id)
                        setToys(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting toy:', error);
                });
        }
    };

    return (

        <>
            <p className='font-extrabold text-center'>My total toy: <span className='text-3xl text-secondary'>{toys.length}</span> items</p>

            <div className='container mx-auto mt-4'>
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
                                    handleDelete={handleDelete}
                                ></ToyRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyToy;