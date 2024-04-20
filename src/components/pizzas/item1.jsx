import React, { useState } from 'react';
import "./pizza.css";
import "./add-button";
import classNames from 'classnames';


const Item = ({ id, h, price, image, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    return (

        <div className="item5">
            <div className="item2">
            <h2>{h}</h2>
            <h3>{price}</h3>
            <button onClick={toggleDescription}>Показать описание</button>
            </div>
            <div className="item3">
            <img src={image} className="image" alt="pic" /> </div>
          
            {showDescription ? (
                <div className='description'>{description}</div>
            ) : null}



        </div>
    );
}

export default Item;
