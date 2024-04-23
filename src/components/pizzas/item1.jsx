import React, { useState, useEffect } from 'react';
import "./pizza.css";
import "./add-button";
import classNames from 'classnames';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = ({ id, h, price, image, description, addToFavorites, favorites }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    console.log("Favorites:", favorites); 
    // const isFavorite = favorites ? favorites.some(item => item.id === id) : false;
    
    useEffect(() => {
        if (favorites && favorites.length > 0) {
            setIsFavorite(favorites.some(item => item.id === id));
        }
    }, [favorites, id]);

   
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        addToFavorites(id); // добавляем или удаляем товар из избранного
    };


    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    return (
        <div className="item5">
            <div className="item2">
               
                <button onClick={toggleFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
                
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
