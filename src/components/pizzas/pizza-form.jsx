
import React, { useState } from 'react';
import "./pizza.css";
import "./add-button";
import Modal from "../modal/modal";

function PizzaForm({ onAddPizza }) {
    const [h, setH] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [showDescription, setShowDescription] = useState(false);


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

    return (

        <div>
            <button className='pokaz' onClick={() => setShowDescription(true)}></button>
            <Modal active={showDescription} setActive={setShowDescription}>
                <div>{description}</div>
            </Modal>
            <button onClick={toggleDescription}>Показать описание</button>
        </div>
    );
}
export default PizzaForm;

