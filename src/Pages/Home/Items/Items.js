import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import Item from '../Home/Item/Item';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div id="items">
           <CardGroup>
            {
                items.map(item =><Item
                    key={item._id}
                    item={item}
                ></Item>
                  )
            }
            </CardGroup>
        </div>
    );
};

export default Items;