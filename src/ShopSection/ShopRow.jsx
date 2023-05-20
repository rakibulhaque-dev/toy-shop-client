import React from 'react';

const ShopRow = ({ toy }) => {
    const { photo, sellerName, toyName, category, quantity, price } = toy;

    return (
        <tr>
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
                {quantity}
            </td>
            <th>
                <button className="btn btn-error btn-sm">Delete</button>
            </th>
        </tr>

    );
};

export default ShopRow;