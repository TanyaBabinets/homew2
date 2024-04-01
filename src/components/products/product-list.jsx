import React from 'react';
import products from './products';
import "./products.css";
import Item from './item';


const ProductList = ({ product }) => {
    return (
        <div className='block'>

            {products.map(product => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
}


export default ProductList;





