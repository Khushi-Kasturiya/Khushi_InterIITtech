import React from 'react';
import './ItemDetails.css';

const ItemDetails = ({ selectedItemId, selectedItem }) => {

    return (
        <div>
            {selectedItem && selectedItem.filter(item => item._id === selectedItemId).map(item => (
                <div key={item._id} className='detail-container'>
                    <img src={item.image_url} alt={item.name} className="item-image" />
                    <h2>{item.name}</h2>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Brand:</strong> {item.brand}</p>
                </div>
            ))}
            </div>
    );
};

export default ItemDetails;
