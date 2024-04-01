import React from 'react';
import "./products.css";

const Item = ({ id, title, price, decription, category, image, rating }) => {

    return (

        <div className="item">
            <h2>{id}{title}</h2>
            <img src={image} className="pic" alt="pic" />
            <div className='general'>
            <div className='descr'>{decription}</div>
            <div className='button'>{price}</div>
            <div className='category'>{category}</div>
            <div>{rating.rate}</div>
            <div>{rating.count}</div>
            </div>
        </div>
    );
}

export default Item;



