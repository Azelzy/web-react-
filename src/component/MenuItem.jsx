import React from 'react';
import ItemBody from './ItemBody';
import ItemImage from './ItemImage';
import DeleteButton from './DeleteButton';

function MenuItem({ name, price, image, id, onDelete }) {
    return (
        <div className="menu-item">
            <ItemImage image={image} />
            <ItemBody name={name} price={price} />
            <DeleteButton id = {id} onDelete={onDelete} />
        </div>
    );
}

export default MenuItem;