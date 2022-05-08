import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const ItemDetails = () => {
  const { inventoryId } = useParams();

  const [item, setItem] = useState({});
  let { quantity } = item;

  useEffect(() => {
    fetch(`https://safe-everglades-50788.herokuapp.com/inventory/${inventoryId}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [item])

  const handleRestock = event => {
    event.preventDefault();
    const addQuantity = event.target.name.value;
    if (quantity === 'Sold Out') {
      quantity = parseInt(addQuantity);
    }
    else {
      quantity = parseInt(addQuantity) + item.quantity;
    }
    const updatedQuantity = { quantity }
    const url = `https://safe-everglades-50788.herokuapp.com/inventory/${inventoryId}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedQuantity)
    })
    event.target.reset();
  }

  return (
    <div className='my-5'>
      <h1 className='text-center text-warning mb-3'>Item Details</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-12">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text"><small>Supplier Name: {item.supplierName}</small></p>
              <p className="card-text">Quantity: {quantity}</p>
              <button type="button" className="btn btn-success">Delivered</button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <img src={item.img} height={300} className="w-100 rounded-start" alt="..." />
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card-body">
              <h5 className="card-title">Restock The Items</h5>
              <form onSubmit={handleRestock}>
                <input placeholder='Quantity' type="number" name="number" id="" /> <br />
                <button type="button" className="btn btn-success my-2">Restock</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;