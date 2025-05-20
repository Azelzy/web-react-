import React from 'react';
import MenuItem from './MenuItem';
import { foodlist } from '../utils/data';

function MenuList() {
    const foods = foodlist();

    return (
        <div className="menu-list">
            {foods.map((food) => (
                <MenuItem
                    key={food.id}
                    {...food} />
            ))}
        </div>
    );
}

export default MenuList;