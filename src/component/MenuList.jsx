import React from 'react';
import MenuItem from './MenuItem';

function MenuList({foods, onDelete}) {
    return (
        <div className="menu-list">
            {foods.map((food) => (
                <MenuItem
                    key={food.id}
                    id = {food.id}
                    onDelete = { onDelete }
                    {...food} />
            ))}
        </div>
    );
}

export default MenuList;