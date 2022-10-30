import { Button, Form } from "react-bootstrap";
import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleItems = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const supplierName = event.target.supplierName.value;
    const email = user?.email;

    const item = {
      name: name,
      price: price,
      img: img,
      description,
      quantity,
      supplierName: supplierName,
      email,
    };

    const url = "https://warehouse-management-ssr.onrender.com/inventory";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("The item has been added successfully!");
        }
      });
    event.target.reset();
  };
  return (
    <div className="my-5">
      <h1 className="my-2 text-center text-warning">Add New Item</h1>
      <div className="w-25 mx-auto mt-4">
        <Form onSubmit={handleItems}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              name="name"
              placeholder="Item Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              name="price"
              placeholder="Item Price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="img"
              placeholder="Image URl"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              as="textarea"
              name="description"
              row="4"
              placeholder="A short description of Item"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              name="quantity"
              placeholder="Quantity"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="supplierName"
              placeholder="Supplier Name"
              required
            />
          </Form.Group>
          <Button className="mx-auto d-block" variant="success" type="submit">
            Add This Item
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddItem;
