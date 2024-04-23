import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import Modal from './components/modal/modal';
// import ProductList from './components/products/product-list';
import PizzaList from './components/pizzas/pizza-list';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import pizzas from './components/pizzas/pizzas.js';
import isFavorite from './components/pizzas/favorites'; 
import FavoriteList from './components/pizzas/favorites';

function App() {
  const [btnText, setBtnText] = useState("ДОБАВИТЬ ТОВАР");
  const [modalActive, setModalActive] = useState(false);
  const [pList, setPList] = useState(pizzas);
  const [favorites, setFavorites] = useState([]);

  const addPizza = (h, price, image, description) => {
    console.log("Добавлена пицца:", h, price, image, description);
    const newPizza = {
      id: nanoid(),
      h,
      price,
      image,
      description
    };
    setPList([...pList, newPizza]);

  };
  
    const addToFavorites = (id) => {
      const itemToAdd = pList.find(item => item.id === id);
      if (itemToAdd && !favorites.find(item => item.id === id)) {
        
        setFavorites([...favorites, itemToAdd]);
        console.log("Добавлено избранное:", itemToAdd)
      }
    
  };
  
  useEffect(() => {
    setBtnText(modalActive ? "ЗАКРЫТЬ" : "ДОБАВИТЬ ТОВАР");
    const BtnFav = isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  }, [modalActive, isFavorite]);


  return (
    <div>
      <h1 className="title">PIZZA-STORE</h1>
      <button className='okno' onClick={() => setModalActive(!modalActive)}>{btnText}</button>
    
      <PizzaList pizzas={pList} addToFavorites={addToFavorites} favorites={favorites.map(item => item.id)} />
      <h2>ИЗБРАННОЕ</h2>
      <div className="icons">
        <FavoriteIcon onClick={() => setModalActive(!modalActive)} />
        <span className="count">{favorites.length}</span>
      </div>
     
      <FavoriteList favorites={favorites} />
    
      <Modal addPizza={addPizza} active={modalActive} />
     </div>
  );
}

export default App;

