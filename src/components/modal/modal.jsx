import React from 'react';
import "./modal.css";
import AddButton from '../pizzas/add-button';

const Modal = ({ active, addPizza}) => {
    return (
        <div id="new" className={active ? 'active' : 'nonactive'} >
            {/* <div className={active ? 'add-button active' : 'add-button'} onClick={e => e.stopPropagation()}> */}
             <AddButton buttonAdd={addPizza}/> 
            {/* </div> */}

        </div>
    );
}


export default Modal;
