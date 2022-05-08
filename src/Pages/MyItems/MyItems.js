
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const axios = require('axios');
const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const email = user.email;

    useEffect(() => {
        const url = `https://safe-everglades-50788.herokuapp.com/myitems?email=${email}`;
        const getMyItems = async () => {

            await axios.get(url)
                .then(response => {
                    setItems(response.data);
                })
            try {

                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })

                    .then(response => {
                        setItems(data);
                    })
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        }
        getMyItems();
    }, [user])

    const deleteFromMyItems = async (id) => {

        const deleteMyItem = window.confirm('Are you sure to delete this item?');
        if (deleteMyItem) {
            const url = `https://safe-everglades-50788.herokuapp.com/myitems/${id}`;

            await axios.delete(url)
                .then(response => {
                    if (response.data.deletedCount === 1) {
                        const restItems = items.filter(item => item._id !== id);
                        setItems(restItems);
                        toast.success('Delete Successfully')
                    }
                })

        }

    }
    return (
        <div className='my-5'>
            <h1 className='text-warning text-center'>My Items</h1>
            <div className='col col-md-10 offset-md-1 my-5'>
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td className='text-start'>{item.name}</td>
                                    <td>{item.price} $</td>
                                    <td>{item.quantity} <small>(piece/gm/kg)</small> </td>
                                    <td><button className='btn-outline-danger' onClick={() => deleteFromMyItems(item._id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </Table>
            </div>

        </div >
    );
};

export default MyItems;