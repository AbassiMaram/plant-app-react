import React, { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../style/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';

function ShoppingList() {
  const [activeCategory, setActiveCategory] = useState('');

  const categories = plantList.reduce((acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category), []);

  return (
    <div className='jh-shoppingList'>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className='jh-plant-list'>
        {plantList.map(({ id, cover, name, price, category }) => {
          if (activeCategory === '' || activeCategory === category) {
            return (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  price={price}
                />
              </div>
            );
          }
          return null;
        })}
      </ul>
    </div>
  )
}

export default ShoppingList;