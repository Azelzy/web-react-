import React from 'react';

function ItemBody({ name, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Harga: Rp {price}</p>
        </div>
    );
}

export default ItemBody;
