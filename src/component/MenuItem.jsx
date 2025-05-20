import React from 'react';
import ItemBody from './ItemBody';
import ItemImage from './ItemImage';

function MenuItem({ name, price, image }) {
    return (
        <div
            className="menu-item"// class css border
        >
            <ItemImage image={image} />
            <ItemBody name={name} price={price} />
        </div>
    );
}

export default MenuItem;
