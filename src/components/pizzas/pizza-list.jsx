import React, { useEffect, useState } from 'react';
import Item from './item1';
import "./pizza.css";


const PizzaList = ({ pizzas, addToFavorites }) => {

    return (

        <div className="container">     
            <div className='block1'>
                <div className='item1'>
                    {pizzas.map(pizzaItem => (
                        <div key={pizzaItem.id}>
                            <Item {...pizzaItem} addToFavorites={addToFavorites} />                       
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PizzaList;







