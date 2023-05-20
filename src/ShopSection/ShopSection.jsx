import React, { useEffect, useState } from 'react';
import ShopRow from './ShopRow';
import { BeatLoader } from 'react-spinners';

const ShopSection = () => {
  const [loading, setLoading] = useState(true);
  
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setLoading(true)
    fetch('https://eleven-toy-server.vercel.app/toys')
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setTotalResults(data.length);
        setLoading(false)
      });
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter(toy => {
    const name = toy.name ? toy.name.toLowerCase() : '';
    const sellerName = toy.sellerName ? toy.sellerName.toLowerCase() : '';
    const searchLower = searchTerm.toLowerCase();
    return name.includes(searchLower) || sellerName.includes(searchLower);
  });

  useEffect(() => {
    setTotalResults(filteredToys.length);
  }, [filteredToys]);

  return (
    <div className="container mx-auto">
      <div className="w-full overflow-x-auto">

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search by toy name or seller name"
            className="w-2/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
          <span className="ml-2 text-gray-500">
            Total Results: {totalResults}
          </span>
        </div>
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
            {filteredToys.map(toy => (
              <ShopRow key={toy._id} toy={toy} loading={loading} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopSection;
