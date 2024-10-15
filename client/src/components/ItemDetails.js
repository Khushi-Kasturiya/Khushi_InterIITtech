import React from 'react';
import './ItemDetails.css';

const ItemDetails = ({ selectedItemId, selectedItem }) => {

    return (
        <div>
            {!selectedItem && <><div className='welcome-conatiner'><p className='welcome-note'>Welcome to the Warehouse Portal!</p><p className='selection-note'>Please select an item to view its Details</p></div></>}
            {selectedItem && selectedItem.filter(item => item._id === selectedItemId).map(item => (
                <div key={item._id} className='detail-container'>
                    <h2>{item.name}</h2>
                    <img src={item.image_url} alt={item.name} className="item-image" />
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
