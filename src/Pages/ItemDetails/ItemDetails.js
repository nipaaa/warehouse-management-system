import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ItemDetails = () => {
  const { inventoryId } = useParams();

  const [item, setItem] = useState({});
  let { quantity } = item;

  useEffect(() => {
    fetch(
      `https://warehouse-management-ssr.onrender.com/inventory/${inventoryId}`
    )
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);

  const handleDeliverd = () => {
    const url = `https://warehouse-management-ssr.onrender.com/inventory/${inventoryId}`;

    if (quantity > 0) {
      quantity = quantity - 1;
      const updatedQuantity = { quantity };
      item.quantity = quantity;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setItem(updatedQuantity);
          }
        });
    } else if (quantity === 0) {
      quantity = "Sold Out";
      const updatedQuantity = { quantity };
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setItem(updatedQuantity);
          }
        });
    }
  };

  const handleRestock = (event) => {
    event.preventDefault();

    const oldQuantity = parseInt(item.quantity);

    const newQuantity = parseInt(event.target.number.value);
    const updatedQuantity = oldQuantity + newQuantity;
    const updatedCar = { ...item, quantity: updatedQuantity };
    console.log(updatedCar);
    const url = `https://warehouse-management-ssr.onrender.com/inventory/${inventoryId}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("success", data);
          setItem(updatedCar);
          toast.info("Quantity is added.", {
            position: toast.POSITION.TOP_CENTER,
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="my-5">
      <h1 className="text-center text-warning mb-3">Item Details</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-12">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <small>Supplier Name: {item.supplierName}</small>
              </p>
              <p className="card-text">Quantity: {quantity}</p>
              <button
                onClick={handleDeliverd}
                type="button"
                className="btn btn-success"
              >
                Delivered
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <img
              src={item.img}
              height={300}
              className="w-100 rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card-body">
              <h5 className="card-title">Restock The Items</h5>
              <form onSubmit={handleRestock}>
                <input
                  placeholder="Quantity"
                  type="number"
                  name="number"
                  id=""
                />{" "}
                <br />
                <button type="submit" className="btn btn-success my-2">
                  Restock
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
