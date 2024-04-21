

import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import Modal from './components/modal/modal';
// import ProductList from './components/products/product-list';
import PizzaList from './components/pizzas/pizza-list';

import pizzas from './components/pizzas/pizzas.js';

function App() {
  const [btnText, setBtnText] = useState("ДОБАВИТЬ ТОВАР");
  const [modalActive, setModalActive] = useState(false);
  const [pList, setPList] = useState(pizzas);
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

  useEffect(() => {

    setBtnText(modalActive ? "ЗАКРЫТЬ" : "ДОБАВИТЬ ТОВАР")


  }, [modalActive]);
  return (

    <div>
      <h1 className="title">PIZZA-STORE</h1>
      <button className='okno' onClick={() => setModalActive(!modalActive)}>{btnText}</button>
      <PizzaList pizzas={pList} />
      <Modal addPizza={addPizza} active={modalActive}>
        

      </Modal></div>
  );
}

export default App;

