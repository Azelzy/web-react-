import React from 'react';
import MenuList from './MenuList';
import { foodlist } from '../utils/data';

function Menu() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="content">
        <h1 className="title">
          WARUNG MAKAN BAROKAH
          <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
          </div>
        </h1>
        <p className="subtitle">Menu Makanan</p>
      </div>
      <MenuList foods={foodlist} />
    </div>
  );
}

export default Menu;