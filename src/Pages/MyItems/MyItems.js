import axios from 'axios';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `https://safe-everglades-50788.herokuapp.com/myItems?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyItems(data);
        }
        getMyItems();

    }, [user])

    return (

        <div className='container my-5'>
            <h1 className='text-warning text-center mb-3'>Manage Items</h1>
            <h2>{myItems.length}{myItems.name}</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier Name</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>


            </table>

        </div>
    );
};

export default MyItems;