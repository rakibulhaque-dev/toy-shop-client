import React, { useContext, useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { MoonLoader } from 'react-spinners';

const MyToy = () => {
    const { setLoading, loading } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascending');


    useEffect(() => {

        fetch('https://eleven-toy-server.vercel.app/createToy')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            });
    }, []);


    //DELETE  handleDelete toy
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure?');
        if (proceed) {
            fetch(`https://eleven-toy-server.vercel.app/createToy/${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Toy deleted:', data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully...');
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting toy:', error);
                });
        }
    };


    // handleDataSort to My Toys Page
    const handleSort = () => {
        const sortedToys = [...toys].sort((a, b) => {
            if (sortOrder === 'ascending') {
                return a.name < b.name ? -1 : 1;
            } else {
                return a.name > b.name ? -1 : 1;
            }
        });

        setToys(sortedToys);
        setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
    };

    return (
        <>
            <p className='font-extrabold text-center'>My total toy: <span className='text-3xl text-secondary'>{toys.length}</span> items</p>
            <ToastContainer></ToastContainer>
            <div className='container mx-auto mt-4'>
                <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    Sort
                                    <button
                                        className="ml-1 focus:outline-none"
                                        onClick={handleSort}
                                    >
                                        {sortOrder === 'ascending' ? '▲' : '▼'}
                                    </button>
                                </th>
                                <th>Toy</th>
                                <th>Seller</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {
                            loading ?
                                <MoonLoader color="#36d7b7" />
                                : <tbody>
                                    {toys.sort((a, b) => {
                                        if (sortOrder === 'ascending') {
                                            return a.name < b.name ? -1 : 1;
                                        } else {
                                            return a.name > b.name ? -1 : 1;
                                        }
                                    })
                                        .map(toy => (
                                            <ToyRow
                                                key={toy._id}
                                                toy={toy}
                                                handleDelete={handleDelete}
                                                setToys={setToys}
                                                toys={toys}
                                            />
                                        ))}
                                </tbody>
                        }

                    </table>
                </div>
            </div>
        </>
    );
};

export default MyToy;
