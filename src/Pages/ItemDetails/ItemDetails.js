import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {inventoryId} = useParams();
    return (
        <div>
            welcome detail {inventoryId}
        </div>
    );
};

export default ItemDetails;