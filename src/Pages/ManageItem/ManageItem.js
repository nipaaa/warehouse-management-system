import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ManageItem = () => {
    const [items, setItems] = useItems();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div className='container my-5'>
              <h1 className='text-warning text-center mb-3'>Manage Items</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Suplier Name</th>
                        {/* <th scope="col">Update</th> */}
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    items.map(item =>
               
                <tbody >
                
                            <tr key={item._id}>
                                <th scope="row">{item.name}</th>
                               
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplierName}</td>
                                {/* <td><i class="fa-solid fa-pen-to-square"></i></td> */}
                                <td onClick={() => handleDelete(item._id)}><i className="fs-5 text-danger fa-solid fa-trash-can"></i></td>
                            </tr>  
                    
                
                </tbody>
                    )}

            </table>
            <Nav.Link className='border-1 bg-success rounded-3 mx-auto w-50 text-center text-white fw-bold' as={Link} to="/addItem" >Add New Item</Nav.Link>

        </div>
    );
};

export default ManageItem;