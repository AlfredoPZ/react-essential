import React, { useContext, useState } from 'react'
import './product.css'
import { DataContext } from '../../util/DataContext';

const Product = ({product}) => {
    const {title, category, description, price} = product;
    const {setCart, cart} = useContext(DataContext);

    const addProduct = () => {
        setCart([...cart, product]);
    }

    return (
        <article className='card'>
            <div className='img-container'>
                <img src={product.images[0].toString() && "https://images.pexels.com/photos/30052232/pexels-photo-30052232/free-photo-of-campo-de-trigo-verde-exuberante-meciendose-con-la-brisa.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={title} />
                <span className='category'>{category.name}</span>
            </div>
            <div className='card-content'>
                <h2>{title}</h2>
                <p className='price'>${price}</p>
                <button className='btnAdd' onClick={addProduct}>Add to cart</button>
            </div>
        </article>
    )
}

export default Product