import React from 'react';
import Item from './item1';

const FavoriteList = ({ favorites}) => {
    return (
        <div>
            
            {favorites.map(pizzaItem => (
                <div key={pizzaItem.id}>
                    <Item {...pizzaItem} />
                </div>
            ))}
        </div>
    );
}

export default FavoriteList;

