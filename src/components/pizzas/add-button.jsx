import React, { useState } from 'react';
import "./pizza.css";
import Item from './item1';

const AddButton = ({ buttonAdd }) => {
    const [vimage, setVimage] = useState('');
    const [h, setH] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [hError, setHError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [showDescription, setShowDescription] = useState(false);

    const AddPic=(event) => {
        var target = event.target;
        setVimage(target.value);
     
        if (!FileReader) {
           
            return;
        }
      
        if (!target.files.length) {
          
            return;
        }
       
        var fileReader = new FileReader();

        fileReader.onload = () => {
            
            setImage(fileReader.result);
           
        }

        fileReader.readAsDataURL(target.files[0]);
        
    };

    const clickHandler = () => {
        if (h.trim().length === 0) {
            setHError('Заполните поле');
            return;
        }
        if (price.trim().length === 0) {
            setPriceError('Заполните поле');
            return;
        }
        buttonAdd(h, price, image, description);
        setH('');
        setPrice('');
        setImage('');
        setVimage('');
        setDescription('');
        setHError(null);
        setPriceError('');
    }
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }
    return (
        <div className='add-button'>
            <div className='add'>
                <h2>Добавить товар</h2>
                <input
                    type="text"
                    placeholder="Название товара"
                    value={h}
                    onChange={(e) => setH(e.target.value)}
                />
                {hError && <div className='red'>{hError}</div>}
                <input
                    type="text"
                    placeholder="Цена"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {priceError && <div className='red'>{priceError}</div>}
                <input
                    type="file"
                    placeholder="загрузить фото"
                     value={vimage}
                    onChange={(e) => AddPic(e)}
                />
                <input
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
              
                <div className='dobavit'> <button onClick={clickHandler}>Добавить</button></div>
             
             
                {showDescription && <div className='description'>{description}</div>}
            </div> </div>
    );
}


export default AddButton;


