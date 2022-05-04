import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const {id,img,name,description,price,quantity,supplierName} = props.item;
    const navigate = useNavigate()
    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
      
        <Card className="m-2 p-3">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>Price: <span className='text-secondary'>$</span> {price}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Quantity:{quantity}</Card.Text>
            <Card.Text>Supplier: {supplierName}</Card.Text>
            <Button onClick={()=> navigateToItemDetails(id)} variant="warning">Stock update</Button>
          </Card.Body>  
        </Card>
      
    );
};

export default Item;