import React, { useEffect, useState } from 'react';
import Item from './item1';
import "./pizza.css";
import PizzaForm from './pizza-form';
import pizzas from './pizzas';
import { nanoid } from 'nanoid';
import AddButton from './add-button';


const PizzaList = ({ pizzas }) => {
  
    return (

        <div className="container">
            <div className='block1'>
                <div className='item1'>
                    {pizzas.map(pizzaItem => (
                        <div key={pizzaItem.id}>
                            <Item {...pizzaItem} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PizzaList;







