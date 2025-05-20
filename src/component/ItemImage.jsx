import React from 'react';

function ItemImage({ image }) {
    return (
        <div>
            <img src={image} alt="Menu Item" width="150" />
        </div>
    );
}

export default ItemImage;
