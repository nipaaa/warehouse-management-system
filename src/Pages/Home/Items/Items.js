import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../Home/Item/Item';

const Items = () => {
    const [items] = useItems();
    const newItem = items.slice(0, 6);
    return (
        <div className='row g-0 my-5' id="inventory">

            <h1 className='text-warning text-center mb-3'>Best Items</h1>

            {
                newItem.map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>
                )
            }

            <Nav.Link className='border-1 bg-success rounded-3 mx-auto w-50 text-center text-white fw-bold' as={Link} to="/manageItem" >Manage Items</Nav.Link>

        </div>
    );
};

export default Items;