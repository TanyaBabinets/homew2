
import React, { useState } from 'react';
import "./pizza.css";
import "./add-button";
import Modal from "../modal/modal";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PizzaForm({ onAddPizza }) {
    const [h, setH] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    const btnAddProduct = () => {
        const newPizza = {
            h: h,
            price: price,
            image: image,
            description: description
        };

        onAddPizza(newPizza);

        setH('');
        setPrice('');
        setImage('');
        setDescription('');
    };
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    const toggleF = () => {
        setShowFavorites(!showFavorites);
    };
    return (

        <div>
            <button onClick={() => addToFavorites(id)}>
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </button>
            <button className='pokaz' onClick={() => setShowDescription(true)}></button>
            <Modal active={showDescription} setActive={setShowDescription}>
                <div>{description}</div>
            </Modal>
            <button onClick={toggleDescription}>Показать описание</button>
        </div>
    );
}
export default PizzaForm;

