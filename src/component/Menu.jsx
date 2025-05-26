import React from 'react';
import MenuList from './MenuList';
import { foodlist } from '../utils/data';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foodlist()
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  onDeleteHandler(id) {
    const foods = this.state.foods.filter((food) => food.id !== id);
    this.setState({ foods });
  }

  

  render() {        
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
        <MenuList 
        foods={this.state.foods} 
        onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default Menu;